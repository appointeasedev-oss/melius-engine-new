import os
import json
import glob
from llm_client import LLMClient

class MeliusEngine:
    def __init__(self):
        self.client = LLMClient()
        self.root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
        self.exclude_dirs = ["melius-engine", ".git", "history", "log", "to-do", "error"]

    def get_all_files(self):
        all_files = []
        for root, dirs, files in os.walk(self.root_dir):
            dirs[:] = [d for d in dirs if d not in self.exclude_dirs]
            for file in files:
                all_files.append(os.path.relpath(os.path.join(root, file), self.root_dir))
        return all_files

    def read_file(self, file_path):
        full_path = os.path.join(self.root_dir, file_path)
        if os.path.exists(full_path):
            with open(full_path, "r") as f:
                return f.read()
        return None

    def write_file(self, file_path, content):
        full_path = os.path.join(self.root_dir, file_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w") as f:
            f.write(content)

    def log_event(self, folder, data):
        count = len(glob.glob(f"{folder}/*.json")) + 1
        file_path = f"{folder}/{count}.json"
        with open(os.path.join(self.root_dir, file_path), "w") as f:
            json.dump(data, f, indent=2)
        return file_path

    def run(self):
        # 1. Check for existing to-dos or errors
        todos = glob.glob(os.path.join(self.root_dir, "to-do/*.json"))
        errors = glob.glob(os.path.join(self.root_dir, "error/*.json"))
        
        context = {
            "files": self.get_all_files(),
            "existing_todos": [os.path.basename(f) for f in todos],
            "existing_errors": [os.path.basename(f) for f in errors]
        }

        # 2. Initial Analysis
        prompt = f"""
        You are Melius Engine, an autonomous AI agent. 
        Current repository files: {context['files']}
        Existing To-Dos: {context['existing_todos']}
        Existing Errors: {context['existing_errors']}

        Analyze the project and state improvements. 
        If you need to read specific files to understand better, list them.
        Respond ONLY in JSON format:
        {{
            "analysis": "your analysis",
            "files_to_read": ["file1", "file2"],
            "improvements": [
                {{"file": "file_path", "description": "what to improve"}}
            ]
        }}
        """
        
        plan = self.client.chat(prompt)
        
        # 3. Read requested files
        requested_files = plan.get("files_to_read", [])
        file_contents = {f: self.read_file(f) for f in requested_files}
        
        # 4. Log improvements
        log_path = self.log_event("log", {
            "analysis": plan.get("analysis"),
            "improvements": plan.get("improvements"),
            "files_read": requested_files
        })
        
        # 5. Execute improvements
        for imp in plan.get("improvements", []):
            file_path = imp["file"]
            current_content = self.read_file(file_path)
            
            edit_prompt = f"""
            Improve the following file: {file_path}
            Description: {imp['description']}
            Current Content:
            {current_content}

            Respond ONLY in JSON format:
            {{
                "new_content": "full updated content of the file"
            }}
            """
            result = self.client.chat(edit_prompt)
            self.write_file(file_path, result["new_content"])
            
            # 6. Verify
            verify_prompt = f"""
            Verify the improvements in {file_path}.
            Original intent: {imp['description']}
            New Content:
            {result['new_content']}

            Respond ONLY in JSON format:
            {{
                "verified": true/false,
                "error": "description of error if any",
                "pending": "description of what is left if any"
            }}
            """
            verification = self.client.chat(verify_prompt)
            
            if not verification["verified"]:
                if verification.get("error"):
                    # Attempt fix once
                    fix_prompt = f"Fix the following error in {file_path}: {verification['error']}. Respond with {{'new_content': '...'}}"
                    fix_result = self.client.chat(fix_prompt)
                    self.write_file(file_path, fix_result["new_content"])
                    
                    # Final check
                    final_check = self.client.chat(f"Final check for {file_path}. Is it fixed? Respond with {{'fixed': true/false}}")
                    if not final_check.get("fixed"):
                        self.log_event("error", {{"file": file_path, "error": verification["error"]}})
                
                if verification.get("pending"):
                    self.log_event("to-do", {{"file": file_path, "pending": verification["pending"]}})

if __name__ == "__main__":
    engine = MeliusEngine()
    engine.run()

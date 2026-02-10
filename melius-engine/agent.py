import os
import json
import glob
from llm_client import LLMClient

class MeliusEngine:
    def __init__(self):
        self.client = LLMClient()
        # Ensure we are working relative to the repo root
        self.root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
        self.exclude_dirs = ["melius-engine", ".git", "history", "log", "to-do", "error", ".github"]

    def get_all_files(self):
        all_files = []
        for root, dirs, files in os.walk(self.root_dir):
            # Modify dirs in-place to skip excluded directories
            dirs[:] = [d for d in dirs if d not in self.exclude_dirs]
            for file in files:
                rel_path = os.path.relpath(os.path.join(root, file), self.root_dir)
                all_files.append(rel_path)
        return all_files

    def read_file(self, file_path):
        full_path = os.path.join(self.root_dir, file_path)
        if os.path.exists(full_path) and os.path.isfile(full_path):
            try:
                with open(full_path, "r", encoding="utf-8") as f:
                    return f.read()
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
        return None

    def write_file(self, file_path, content):
        full_path = os.path.join(self.root_dir, file_path)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)

    def log_event(self, folder, data):
        folder_path = os.path.join(self.root_dir, folder)
        os.makedirs(folder_path, exist_ok=True)
        count = len(glob.glob(f"{folder_path}/*.json")) + 1
        file_path = os.path.join(folder_path, f"{count}.json")
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
        return file_path

    def run(self):
        # 1. Check for existing state
        todos_paths = glob.glob(os.path.join(self.root_dir, "to-do/*.json"))
        errors_paths = glob.glob(os.path.join(self.root_dir, "error/*.json"))
        
        existing_todos = []
        for p in todos_paths:
            with open(p, 'r') as f: existing_todos.append(json.load(f))
            
        existing_errors = []
        for p in errors_paths:
            with open(p, 'r') as f: existing_errors.append(json.load(f))

        all_files = self.get_all_files()
        
        # 2. Initial Analysis & Planning
        prompt = f"""
        You are Melius Engine, an autonomous AI agent. 
        Repository files: {all_files}
        Existing To-Dos: {existing_todos}
        Existing Errors: {existing_errors}

          Analyze the project and suggest improvements. 
        If you need to read specific files to understand the project better, list them in "files_to_read".
        
        CRITICAL: Your response must be a valid JSON object. Do not include any text outside the JSON.
        
        Example format:
        {{
            "analysis": "Brief analysis of the current project state.",
            "files_to_read": ["path/to/file1.py", "path/to/file2.js"],
            "improvements": [
                {{"file": "path/to/file.py", "description": "Specific improvement description"}}
            ]
        }}
        """
        
        plan = self.client.chat(prompt)
        
        # 3. Read requested files for context
        requested_files = plan.get("files_to_read", [])
        file_context = {f: self.read_file(f) for f in requested_files}
        
        # 4. Log the plan
        self.log_event("log", {
            "analysis": plan.get("analysis"),
            "improvements": plan.get("improvements"),
            "files_read": requested_files
        })
        
        # 5. Execute improvements
        for imp in plan.get("improvements", []):
            file_path = imp["file"]
            current_content = self.read_file(file_path)
            if current_content is None: continue

            edit_prompt = f"""
            Improve the file: {file_path}
            Description: {imp['description']}
            Context from other files: {file_context}
            Current Content:
            {current_content}

            Respond ONLY in JSON format with the full new content.
            {{
                "new_content": "..."
            }}
            """
            result = self.client.chat(edit_prompt)
            new_content = result.get("new_content")
            if not new_content: continue
            
            self.write_file(file_path, new_content)
            
            # 6. Verify (No edits here, just check)
            verify_prompt = f"""
            Verify improvements in {file_path}.
            Intent: {imp['description']}
            New Content:
            {new_content}

            Respond ONLY in JSON format.
            {{
                "verified": true/false,
                "error": "description if any",
                "pending": "what is left if any"
            }}
            """
            verification = self.client.chat(verify_prompt)
            
            if not verification.get("verified"):
                if verification.get("error"):
                    # Attempt fix once
                    fix_prompt = f"Fix error in {file_path}: {verification['error']}. Respond ONLY with {{'new_content': '...'}}"
                    fix_result = self.client.chat(fix_prompt)
                    fixed_content = fix_result.get("new_content")
                    if fixed_content:
                        self.write_file(file_path, fixed_content)
                        # Final check
                        final_check = self.client.chat(f"Is {file_path} fixed? Respond ONLY with {{'fixed': true/false}}")
                        if not final_check.get("fixed"):
                            self.log_event("error", {{"file": file_path, "error": verification["error"], "status": "failed_fix"}})
                
                if verification.get("pending"):
                    self.log_event("to-do", {{"file": file_path, "pending": verification["pending"]}})

if __name__ == "__main__":
    engine = MeliusEngine()
    engine.run()

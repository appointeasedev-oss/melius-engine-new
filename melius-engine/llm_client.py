import os
import json
import requests
import time

class LLMClient:
    def __init__(self):
        self.api_keys = [
            os.getenv(f"OPENROUTER_API_KEY_{i}") for i in range(1, 6)
        ]
        self.api_keys = [k for k in self.api_keys if k]
        # Updated models list based on user request
        self.models = [
            "arcee-ai/trinity-large-preview:free",
            "liquid/lfm-2.5-1.2b-thinking:free",
            "tngtech/tng-r1t-chimera:free",
            "qwen/qwen3-next-80b-a3b-instruct:free",
            "qwen/qwen3-coder:free",
            "nousresearch/hermes-3-llama-3.1-405b:free"
        ]
        self.history_file = "history/chat_history.json"
        self.load_history()

    def load_history(self):
        if os.path.exists(self.history_file):
            try:
                with open(self.history_file, "r") as f:
                    self.history = json.load(f)
            except:
                self.history = []
        else:
            self.history = []

    def save_history(self):
        os.makedirs(os.path.dirname(self.history_file), exist_ok=True)
        with open(self.history_file, "w") as f:
            json.dump(self.history, f, indent=2)

    def chat(self, prompt):
        self.history.append({"role": "user", "content": prompt})
        
        for key in self.api_keys:
            for model in self.models:
                try:
                    response = requests.post(
                        url="https://openrouter.ai/api/v1/chat/completions",
                        headers={
                            "Authorization": f"Bearer {key}",
                            "Content-Type": "application/json",
                        },
                        data=json.dumps({
                            "model": model,
                            "messages": self.history,
                            "response_format": {"type": "json_object"}
                        }),
                        timeout=60 # Increased timeout for larger models
                    )
                    if response.status_code == 200:
                        result = response.json()
                        content = result['choices'][0]['message']['content']
                        # Ensure content is valid JSON before accepting
                        json_content = json.loads(content)
                        self.history.append({"role": "assistant", "content": content})
                        self.save_history()
                        return json_content
                    else:
                        print(f"Error with model {model}: {response.text}")
                except Exception as e:
                    print(f"Exception with model {model}: {e}")
                time.sleep(1)
        
        raise Exception("All API keys and models failed.")

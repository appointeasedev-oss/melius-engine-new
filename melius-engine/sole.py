import os
import json
import shutil
import glob

class SoleManager:
    def __init__(self, root_dir):
        self.root_dir = root_dir
        self.sole_file = os.path.join(self.root_dir, "sole.py") # Self-reference or metadata? User asked for sole.py
        # Actually, user said "add a sole file that sole.py that decripbe even comming"
        # I'll treat it as a data/config file or a script that returns the event.
        self.event_file = os.path.join(self.root_dir, "event.json") # Better to have a separate data file

    def get_event(self):
        """
        Reads the event from event.json.
        event.json format: {"event": "christmas"} or {"event": ""}
        """
        if os.path.exists(self.event_file):
            try:
                with open(self.event_file, "r") as f:
                    data = json.load(f)
                    return data.get("event", "").strip()
            except:
                return ""
        return ""

    def reset_system(self):
        """
        Cleans logs and resets system state.
        """
        log_dir = os.path.join(self.root_dir, "log")
        error_dir = os.path.join(self.root_dir, "error")
        todo_dir = os.path.join(self.root_dir, "to-do")
        
        for d in [log_dir, error_dir, todo_dir]:
            if os.path.exists(d):
                shutil.rmtree(d)
            os.makedirs(d, exist_ok=True)
        
        print("System reset: Logs, errors, and to-dos cleared.")

if __name__ == "__main__":
    # Example usage or CLI for manual reset
    import sys
    root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    manager = SoleManager(root)
    if len(sys.argv) > 1 and sys.argv[1] == "reset":
        manager.reset_system()
    else:
        print(f"Current Event: {manager.get_event()}")

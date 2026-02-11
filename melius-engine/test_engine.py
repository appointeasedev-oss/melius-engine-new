import os
import json
from agent import MeliusEngine
from sole import SoleManager

def test_system():
    root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    engine = MeliusEngine()
    sole = SoleManager(root)

    print("--- Testing System Reset ---")
    # Create some dummy logs
    os.makedirs(os.path.join(root, "log"), exist_ok=True)
    with open(os.path.join(root, "log/test.json"), "w") as f: f.write("{}")
    
    print(f"Log exists before reset: {os.path.exists(os.path.join(root, 'log/test.json'))}")
    sole.reset_system()
    print(f"Log exists after reset: {os.path.exists(os.path.join(root, 'log/test.json'))}")

    print("\n--- Testing UI Restriction ---")
    restricted_file = "vercel.json"
    result = engine.write_file(restricted_file, "{}")
    print(f"Writing to {restricted_file} allowed: {result}")

    ui_file = "test-website/client/src/index.css"
    result = engine.write_file(ui_file, "/* test */")
    print(f"Writing to {ui_file} allowed: {result}")

    print("\n--- Testing File Cache (Redundant Read Prevention) ---")
    engine.read_file(ui_file)
    print(f"File in cache: {ui_file in engine.read_files_cache}")

    print("\n--- Testing Session History ---")
    print(f"History file: {engine.client.history_file}")

    print("\n--- Testing Event Handling ---")
    with open(os.path.join(root, "event.json"), "w") as f:
        json.dump({"event": "christmas"}, f)
    print(f"Current event: {sole.get_event()}")

if __name__ == "__main__":
    test_system()

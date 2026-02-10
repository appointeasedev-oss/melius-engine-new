# Melius Engine

Melius Engine is an autonomous AI agent that continuously improves your repository. It runs as a GitHub Action every 7 minutes, analyzing your code, applying improvements, and verifying the results.

## Features
- **Autonomous Improvements**: Automatically identifies and applies code enhancements.
- **Verification Loop**: Verifies every change and attempts to fix errors.
- **Fallback System**: Uses OpenRouter with 5 API keys and multiple free models for high availability.
- **Logging & Tracking**: Maintains detailed logs in `/log`, `/to-do`, and `/error` folders.
- **Stateful**: Keeps track of chat history in `/history`.

## Setup
1.  **API Keys**: Add 5 OpenRouter API keys to your repository secrets as:
    - `OPENROUTER_API_KEY_1`
    - `OPENROUTER_API_KEY_2`
    - `OPENROUTER_API_KEY_3`
    - `OPENROUTER_API_KEY_4`
    - `OPENROUTER_API_KEY_5`
2.  **Permissions**: Ensure the GitHub Action has write permissions to the repository (Settings > Actions > General > Workflow permissions).
3.  **Models**: The engine uses free models from OpenRouter by default.

## How it Works
1.  **Analysis**: Scans all files outside the `melius-engine` directory.
2.  **Planning**: Identifies potential improvements and logs them.
3.  **Execution**: Edits files one by one based on the plan.
4.  **Verification**: Checks if the improvement was successful and if any errors were introduced.
5.  **Error Handling**: Attempts to fix errors once; if it fails, it logs the error for the next cycle.
6.  **Persistence**: Saves the state and history to the repository.

## Directory Structure
- `melius-engine/`: Core logic of the agent.
- `log/`: JSON logs of each improvement cycle.
- `to-do/`: Pending tasks or improvements.
- `error/`: Persistent errors that need manual attention or a retry.
- `history/`: Chat history with the LLM.

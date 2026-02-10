export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Melius Engine</div>
          <div className="text-sm text-gray-600">Autonomous Code Improvement</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Autonomous Code Improvement
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Melius Engine is an AI-powered GitHub Action that continuously analyzes, improves, and verifies your code every 7 minutes.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Analysis */}
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis</h3>
            <p className="text-gray-600">
              Scans all files in your repository, understands the project structure, and identifies improvement opportunities across all folders and subfolders.
            </p>
          </div>

          {/* Execution */}
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Execution</h3>
            <p className="text-gray-600">
              Applies intelligent improvements to your code using AI models with full context awareness. Changes are made one file at a time with careful consideration.
            </p>
          </div>

          {/* Verification */}
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verification</h3>
            <p className="text-gray-600">
              Verifies every change, handles errors automatically, and logs improvements. Persistent errors are tracked for manual review.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Repository Scan</h3>
                <p className="text-gray-600">The agent scans your entire repository, reading all files outside the melius-engine directory to understand the project.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improvement Planning</h3>
                <p className="text-gray-600">AI analyzes the code and creates a plan for improvements. It can request additional files for better context understanding.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Modification</h3>
                <p className="text-gray-600">Improvements are applied to files one by one. Each change is made with full awareness of the project context.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification & Error Handling</h3>
                <p className="text-gray-600">Each change is verified. If errors occur, the system attempts one automatic fix. Persistent issues are logged for review.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">5</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Logging & Persistence</h3>
                <p className="text-gray-600">All improvements are logged in /log folder. Pending tasks go to /to-do, errors to /error. Chat history is saved for context continuity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Powered By Free AI Models</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Models</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">•</span>
                arcee-ai/trinity-large-preview:free
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">•</span>
                liquid/lfm-2.5-1.2b-thinking:free
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">•</span>
                tngtech/tng-r1t-chimera:free
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">•</span>
                qwen/qwen3-next-80b-a3b-instruct:free
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">•</span>
                qwen/qwen3-coder:free
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">•</span>
                nousresearch/hermes-3-llama-3.1-405b:free
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fallback System</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                The system uses 5 API keys from OpenRouter with automatic fallback:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Tries each model with the first API key</li>
                <li>✓ Falls back to next API key on failure</li>
                <li>✓ Rotates through all 6 free models</li>
                <li>✓ Ensures high availability and reliability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-2xl">🔄</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Runs Every 7 Minutes</h3>
                <p className="text-gray-600 text-sm">Continuous improvement via GitHub Actions scheduler</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">📁</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Multi-Folder Support</h3>
                <p className="text-gray-600 text-sm">Handles complex directory structures and subfolders</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">💬</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Chat History</h3>
                <p className="text-gray-600 text-sm">Maintains conversation history for context continuity</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">📝</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Detailed Logging</h3>
                <p className="text-gray-600 text-sm">Tracks improvements, pending tasks, and errors</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">🔍</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Context Aware</h3>
                <p className="text-gray-600 text-sm">Requests related files for better understanding</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">⚡</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Error Recovery</h3>
                <p className="text-gray-600 text-sm">Automatically attempts to fix errors once</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Instructions */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Getting Started</h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Setup Steps</h3>
          
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
              <span>Add 5 OpenRouter API keys to GitHub Secrets as OPENROUTER_API_KEY_1 through OPENROUTER_API_KEY_5</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
              <span>Create .github/workflows/melius-engine.yml in your repository with the provided workflow configuration</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
              <span>Enable workflow permissions in repository settings (Settings → Actions → General → Workflow permissions)</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
              <span>The engine will automatically start running every 7 minutes</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
              <span>Check /log, /to-do, and /error folders to track improvements</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>Melius Engine • Autonomous Code Improvement System</p>
          <p className="mt-2">Powered by OpenRouter and Free AI Models</p>
        </div>
      </footer>
    </div>
  );
}

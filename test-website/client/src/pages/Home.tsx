import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <a className="text-2xl font-bold text-gray-900">Melius Engine</a>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link href="/about">
                <a className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              </Link>
            </div>
          </div>
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
            Melius Engine is an AI-powered system that continuously analyzes, improves, and verifies your code.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <a className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Get Started</a>
            </Link>
            <Link href="/about">
              <a className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Learn More</a>
            </Link>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis</h3>
            <p className="text-gray-600">
              Scans all files in your repository and identifies improvement opportunities across all folders.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Execution</h3>
            <p className="text-gray-600">
              Applies intelligent improvements using AI models with full context awareness.
            </p>
          </div>

          <div className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verification</h3>
            <p className="text-gray-600">
              Verifies every change, handles errors automatically, and logs improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>Melius Engine • Autonomous Code Improvement System</p>
        </div>
      </footer>
    </div>
  );
}

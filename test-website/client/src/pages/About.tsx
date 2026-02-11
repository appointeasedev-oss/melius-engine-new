export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Melius Engine</div>
          <div className="text-sm text-gray-600">About Us</div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Melius Engine</h1>
        <div className="prose prose-lg text-gray-600 mx-auto">
          <p className="mb-6">
            Melius Engine was created with a simple goal: to make code improvement autonomous and effortless. 
            By leveraging the power of modern LLMs, we provide a system that works around the clock to ensure your 
            codebase stays clean, efficient, and up-to-date.
          </p>
          <p className="mb-6">
            Our engine is designed to be non-intrusive, focusing on meaningful improvements while respecting your 
            project's architecture and constraints. With the latest update, we've introduced event-driven UI 
            modifications, allowing your application to adapt to seasonal events like Christmas or Diwali automatically.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Vision</h2>
          <p>
            We believe in a future where AI and developers work in harmony. Melius Engine handles the repetitive 
            tasks of refactoring and UI polishing, freeing up developers to focus on building innovative features.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>Melius Engine • Autonomous Code Improvement System</p>
        </div>
      </footer>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Melius Engine</div>
          <div className="text-sm text-gray-600">Contact</div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h1>
        <div className="max-w-lg mx-auto bg-gray-50 p-8 rounded-xl border border-gray-200">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
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

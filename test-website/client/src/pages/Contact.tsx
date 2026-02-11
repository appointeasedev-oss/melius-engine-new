import { Link } from "wouter";

const navLinkClass =
  "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <Link href="/">
            <a className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">Melius Engine</a>
          </Link>
          <nav className="flex items-center gap-2">
            <Link href="/">
              <a className={navLinkClass}>Home</a>
            </Link>
            <Link href="/about">
              <a className={navLinkClass}>About</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="mb-4 inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Contact us
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s build something better</h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Share your project goals and we’ll help you apply autonomous improvements with a clean, maintainable UI.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Email:</span> hello@melius.dev
              </p>
              <p>
                <span className="font-semibold text-slate-900">Response time:</span> within 24 hours
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  placeholder="Tell us what you need"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500 sm:px-6">
          Melius Engine • UI automation made simple
        </div>
      </footer>
    </div>
  );
}

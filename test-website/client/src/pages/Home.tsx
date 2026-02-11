import { Link } from "wouter";

const navLinkClass =
  "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/">
            <a className="text-lg font-semibold tracking-tight sm:text-xl">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Melius Engine
              </span>
            </a>
          </Link>

          <nav className="flex items-center gap-2">
            <Link href="/about">
              <a className={navLinkClass}>About</a>
            </Link>
            <Link href="/contact">
              <a className={navLinkClass}>Contact</a>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-100/60 p-8 shadow-sm sm:p-14 summer-bg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
            <div className="sun"></div>

            <div className="relative">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 summer-badge">
                Autonomous Dev Assistant
              </p>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl summer-text">
                Continuously improve your codebase — automatically.
              </h1>

              <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg summer-text">
                Melius Engine analyzes your repository, applies high-impact fixes,
                and verifies every change through a clean, autonomous workflow.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <a className="inline-flex items-center justify-center rounded-full summer-button px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5">
                    Start now
                  </a>
                </Link>

                <Link href="/about">
                  <a className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-100">
                    Learn more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🔎",
                title: "Deep analysis",
                text: "Scans your repository with context awareness to surface practical, high-impact improvements.",
              },
              {
                icon: "⚙️",
                title: "Smart execution",
                text: "Applies clean UI and code updates while preserving structure and intent.",
              },
              {
                icon: "✅",
                title: "Safety checks",
                text: "Verifies every change and retries automatically when issues are detected.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md summer-card"
              >
                <div className="mb-4 text-3xl transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h2 className="text-lg font-semibold summer-text">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500 sm:px-6">
          © {new Date().getFullYear()} Melius Engine — Autonomous, modern repository improvement
        </div>
      </footer>
    </div>
  );
}
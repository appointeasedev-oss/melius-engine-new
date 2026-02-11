import { Link } from "wouter";

const navLinkClass =
  "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <Link href="/">
            <a className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">Melius Engine</a>
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

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 shadow-sm sm:p-12">
            <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Autonomous Dev Assistant
            </p>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              A modern engine that continuously improves your codebase.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
              Melius Engine analyzes your repository, applies high-impact fixes, and verifies everything in a clean,
              automated workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact">
                <a className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                  Start now
                </a>
              </Link>
              <Link href="/about">
                <a className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🔎",
                title: "Deep analysis",
                text: "Scans multiple folders and surfaces practical improvements with context awareness.",
              },
              {
                icon: "⚙️",
                title: "Smart execution",
                text: "Applies clean UI and code changes while keeping your repo structure stable.",
              },
              {
                icon: "✅",
                title: "Safety checks",
                text: "Verifies each update and retries once automatically when issues are detected.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-500 sm:px-6">
          Melius Engine • Modern, automated repository improvements
        </div>
      </footer>
    </div>
  );
}

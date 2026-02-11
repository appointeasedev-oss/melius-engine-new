import { Link } from "wouter";

const navLinkClass =
  "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900";

export default function About() {
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
            <Link href="/contact">
              <a className={navLinkClass}>Contact</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12 summer-card">
          <p className="mb-4 inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 summer-badge">
            About the product
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl summer-text">Built for continuous improvement</h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg summer-text">
            Melius Engine helps teams keep their UI and workflows clean by continuously detecting opportunities,
            applying refinements, and validating outcomes in an automated loop.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-base font-semibold text-slate-900">Mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Reduce repetitive maintenance work so developers can focus on product quality and user value.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-base font-semibold text-slate-900">Approach</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                AI-assisted, event-driven updates with guardrails to keep modifications targeted and safe.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-base font-semibold text-slate-900">Benefits</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Cleaner UI, faster iteration, and consistent quality across your codebase.
              </p>
            </div>
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
const links = [
  { label: 'Timeline', href: '/experience' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kaden-hyatt/' },
  { label: 'X', href: 'https://x.com/kaden_hyatt' },
  { label: 'GitHub', href: 'https://github.com/Nedak23' },
]

const previousProjects = [
  {
    title: 'Which Frame Fits?',
    href: 'https://journals.sagepub.com/doi/10.1177/20531680251414927',
    description:
      'Research on how different policy framings affect attitudes toward climate change policy.',
    detail: 'Published in Research & Politics · 2026',
  },
  {
    title: 'Political Bias Drift in Post-Trained LLMs',
    href: 'https://data259.vercel.app/',
    description:
      'Research on how political bias shifts during post-training, using a custom pipeline built on Llama 3.',
    detail: 'UChicago Data Science Institute · Poster winner',
  },
  {
    title: 'Steam Interactive Graph',
    href: 'https://github.com/Nedak23/SteamInteractiveGraph',
    description:
      'An interactive D3.js network visualization of relationships between Steam games and genres.',
    detail: 'D3.js · Data visualization',
  },
]

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-5 py-6 sm:px-8 sm:py-10">
      <header className="flex flex-col gap-5 border-b border-stone-300 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="text-base font-semibold tracking-tight">
          Kaden Hyatt
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600">
            {links.map((link) => {
              const external = link.href.startsWith('http')

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="underline decoration-stone-300 underline-offset-4 hover:text-stone-950 hover:decoration-stone-950"
                  >
                    {link.label}
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <div id="top">
        <section className="grid gap-10 border-b border-stone-300 py-14 sm:py-20 lg:grid-cols-[1.45fr_0.55fr] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
              Student · Builder · Researcher
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-stone-950 sm:text-5xl">
              Exploring how people build and work with intelligent systems.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              I&apos;m a Data Science and Computer Science major at the University of Chicago. After a summer at{' '}
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7382792787341037568/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-950 underline decoration-orange-700 underline-offset-4 hover:text-orange-700"
              >
                Replit
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              , I became interested in new ways for humans to interact with LLMs.
            </p>
          </div>

          <aside className="self-end border-l-2 border-orange-700 pl-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Currently</p>
            <p className="mt-3 leading-6 text-stone-700">
              Working on agent orchestration at{' '}
              <a
                href="https://www.conductor.build/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-stone-950 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-950"
              >
                Conductor
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </aside>
        </section>

        <section className="border-b border-stone-300 py-12 sm:py-16" aria-labelledby="current-projects">
          <div className="grid gap-7 sm:grid-cols-[12rem_1fr] sm:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">01</p>
              <h2 id="current-projects" className="mt-2 text-xl font-semibold tracking-tight">
                Current project
              </h2>
            </div>
            <article className="rounded-sm border border-stone-300 bg-white/40 p-6 transition-colors hover:border-stone-500 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-2xl font-semibold tracking-tight">
                  <a
                    href="https://racetokepler.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-orange-700 underline-offset-4"
                  >
                    Race to Kepler
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </h3>
                <span className="w-fit rounded-full border border-orange-700/30 bg-orange-50 px-3 py-1 text-xs text-orange-800">
                  In production
                </span>
              </div>
              <p className="mt-5 max-w-2xl leading-7 text-stone-600">
                A deck-building game created to solve some of the genre&apos;s biggest problems. We crowdfunded
                $100k from more than 1,000 backers, fully funded within two hours, and are now manufacturing and
                fulfilling the game.
              </p>
            </article>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="previous-projects">
          <div className="grid gap-7 sm:grid-cols-[12rem_1fr] sm:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">02</p>
              <h2 id="previous-projects" className="mt-2 text-xl font-semibold tracking-tight">
                Selected work
              </h2>
            </div>
            <div className="divide-y divide-stone-300 border-y border-stone-300">
              {previousProjects.map((project) => (
                <article key={project.title} className="group py-7 sm:grid sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                  <h3 className="text-base font-semibold leading-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-stone-300 underline-offset-4 group-hover:decoration-orange-700"
                    >
                      {project.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </h3>
                  <div className="mt-3 sm:mt-0">
                    <p className="leading-6 text-stone-600">{project.description}</p>
                    <p className="mt-3 text-xs uppercase tracking-wide text-stone-500">{project.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="flex flex-col gap-2 border-t border-stone-300 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Kaden Hyatt</p>
        <p>Built with Next.js and good typography.</p>
      </footer>
    </main>
  )
}

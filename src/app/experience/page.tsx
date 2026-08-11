import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Experience | Kaden Hyatt',
  description: 'Professional experience and research by Kaden Hyatt.',
}

type TimelineEntry = {
  dates: string
  title: string
  organization: string
  location?: string
  highlights: React.ReactNode[]
}

const experience: TimelineEntry[] = [
  {
    dates: 'Mar 2026 — Present',
    title: 'Software Engineering Intern',
    organization: 'Conductor',
    location: 'San Francisco, California',
    highlights: [
      'One of six engineers building an AI agent orchestration platform, with daily active users doubling since March',
      'Built harness syncing between Claude Code and Codex',
      'Implemented performance improvements that reduced average CPU usage by 50%',
      'Improved frontend agent configuration and workflow visualization',
    ],
  },
  {
    dates: 'Jan 2023 — Present',
    title: 'Co-Founder',
    organization: 'Conduit Games Company',
    location: 'Berkeley, California',
    highlights: [
      'Crowdfunded roughly $90k from more than 1,000 backers in a Kickstarter campaign that fully funded in two hours',
      'Designed and balanced Race to Kepler through more than three years of playtesting',
      'Created the graphic layout for cards, game boxes, and marketing materials in Figma',
      'Coordinated manufacturing and fulfillment with overseas partners',
      'Showcased Race to Kepler at PAX West 2024 and Gen Con 2025',
    ],
  },
  {
    dates: 'Jul 2025 — Sep 2025',
    title: 'Product & Data Intern',
    organization: 'Replit',
    location: 'Foster City, California',
    highlights: [
      'Analyzed user price sensitivity to determine optimal pricing, increasing ARR by 10%',
      'Identified and implemented a growth funnel optimization that increased initial active users by 12%',
      'Developed a DAG to classify user messages with LLMs for A/B tests',
      'Built a system to analyze LLM traces and identify common issues for prompt tuning',
    ],
  },
  {
    dates: 'Jun 2025 — Sep 2025',
    title: 'Marketing Strategist',
    organization: 'UVS Games',
    location: 'Remote',
    highlights: [
      'Developed the ideal demo experience for the Riftbound trading card game',
      'Met with more than 15 potential partners to negotiate demo partnerships',
      'Planned and presented marketing programs',
    ],
  },
  {
    dates: 'Jan 2013 — Jun 2023',
    title: 'Competitive Card Game Player',
    organization: 'Competitive Gaming',
    location: 'International',
    highlights: [
      'Six-time Pokémon TCG World Championship competitor',
      'Five-time Pokémon TCG Regional Champion',
    ],
  },
]

const research: TimelineEntry[] = [
  {
    dates: 'Mar 2026 — Jun 2026',
    title: 'Karczmar Lab',
    organization: 'Department of Radiology, University of Chicago',
    location: 'Chicago, Illinois',
    highlights: [
      'Worked on machine-learning approaches to breast cancer treatment',
      'Developed graph neural networks to predict treatment response from MRI data',
      'Increased model AUC from 0.53 to 0.67',
    ],
  },
  {
    dates: 'Sep 2025 — Dec 2025',
    title: 'Political Bias Drift in Post-Trained LLMs',
    organization: 'Data Science Institute, University of Chicago',
    location: 'Chicago, Illinois',
    highlights: [
      'Won the poster presentation for the research',
      'Sourced and compiled diverse datasets with specific biases',
      'Constructed an LLM post-training pipeline to train Llama 3 models',
    ],
  },
  {
    dates: 'Jan 2024 — Oct 2024',
    title: 'Research Assistant',
    organization: 'Department of Social Sciences, University of Chicago',
    location: 'Chicago, Illinois',
    highlights: [
      <span key="publication">
        Co-authored{' '}
        <a
          href="https://journals.sagepub.com/doi/10.1177/20531680251414927"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-orange-700 underline-offset-4 hover:text-orange-700"
        >
          “Which frame fits?”
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        , published in <em>Research & Politics</em> (2026)
      </span>,
      'Built machine-learning models in Python to predict effective policy framing from demographic information',
      'Used pandas and Statsmodels to implement linear regression and random forest models',
      'Translated code from Python to R and encoded output in LaTeX',
    ],
  },
]

function TimelineSection({
  number,
  title,
  entries,
}: {
  number: string
  title: string
  entries: TimelineEntry[]
}) {
  return (
    <section className="border-t border-stone-300 py-12 sm:py-16" aria-labelledby={title.toLowerCase()}>
      <div className="grid gap-8 md:grid-cols-[12rem_1fr] md:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">{number}</p>
          <h2 id={title.toLowerCase()} className="mt-2 text-xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
        <div>
          {entries.map((entry) => (
            <article
              key={`${entry.dates}-${entry.title}`}
              className="relative border-l border-stone-300 pb-12 pl-6 last:pb-0 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8 sm:pl-8"
            >
              <span className="absolute -left-[5px] top-1.5 size-[9px] rounded-full border-2 border-orange-700 bg-[#f7f3eb]" />
              <p className="mb-3 text-xs font-medium uppercase leading-5 tracking-wide text-stone-600 sm:mb-0">
                {entry.dates}
              </p>
              <div>
                <h3 className="text-lg font-semibold leading-6 tracking-tight text-stone-950">{entry.title}</h3>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {entry.organization}
                  {entry.location && <span> · {entry.location}</span>}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-600">
                  {entry.highlights.map((highlight, index) => (
                    <li key={index} className="relative pl-4 before:absolute before:left-0 before:content-['–']">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Experience() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-5 py-6 sm:px-8 sm:py-10">
      <header className="flex items-center justify-between border-b border-stone-300 pb-6">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Kaden Hyatt
        </Link>
        <Link
          href="/"
          className="text-sm text-stone-600 underline decoration-stone-300 underline-offset-4 hover:text-stone-950 hover:decoration-stone-950"
        >
          ← Back home
        </Link>
      </header>

      <section className="py-14 sm:py-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">Timeline</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] text-stone-950 sm:text-5xl">
          Experience across engineering, research, and games.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
          Building technical products, studying intelligent systems, and creating games people want to play.
        </p>
      </section>

      <TimelineSection number="01" title="Experience" entries={experience} />
      <TimelineSection number="02" title="Research" entries={research} />

      <footer className="flex items-center justify-between border-t border-stone-300 pt-6 text-xs text-stone-600">
        <p>© 2026 Kaden Hyatt</p>
        <Link href="/" className="underline decoration-stone-300 underline-offset-4 hover:text-stone-950">
          Back home
        </Link>
      </footer>
    </main>
  )
}

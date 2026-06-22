export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl mb-2">Kaden Hyatt</h1>
      
      <div className="mb-8 text-sm text-gray-500">
        <a 
          href="/experience"
          className="underline hover:no-underline"
        >
          Timeline
        </a>
        {' - '}
        <a 
          href="https://www.linkedin.com/in/kaden-hyatt/" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          LinkedIn
        </a>
        {' - '}
        <a 
          href="https://x.com/kaden_hyatt" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          X
        </a>
        {' - '}
        <a 
          href="https://github.com/Nedak23" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          GitHub
        </a>
      </div>
      
      <div className="space-y-8 leading-relaxed">
        <p>
          I'm a Data Science and Computer Science major at The University of Chicago. I discovered my love for exploring
          unique ways for humans to interact with LLMs after a{' '}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7382792787341037568/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            summer at Replit
          </a>
          . I'm now working on agent orchestration at{' '}
          <a
            href="https://www.conductor.build/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Conductor
          </a>
          .
        </p>

        <section className="space-y-4">
          <h2 className="text-xl border-b border-black pb-1">Current Projects</h2>
          
          <div className="space-y-3">
            <h3 className="font-bold flex items-center gap-2">
              <a 
                href="https://racetokepler.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline text-inherit"
              >
                Race to Kepler
              </a>
            </h3>
            <p>
              After being a huge fan of deck-building games for many years, we decided to make our own
              to take on some of the largest problems we had with the genre. Run like a small startup,
              we crowdfunded $100k from over 1,000 backers on Kickstarter, fully funded within 2 hours, and are now in manufacturing and fulfillment.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl border-b border-black pb-1">Previous Projects</h2>
          
          <div className="space-y-3">
            <h3 className="font-bold">
              <a
                href="https://journals.sagepub.com/doi/10.1177/20531680251414927"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline text-inherit"
              >
                Which Frame Fits?
              </a>
            </h3>
            <p>
              Research project with the Social Science Department at the University of Chicago studying
              how different policy framings affect attitudes towards climate change policy.
            </p>
            <p className="text-gray-500">Published in Research &amp; Politics (2026)</p>
          </div>

          <div className="space-y-3 pt-6">
            <h3 className="font-bold">
              <a
                href="https://data259.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline text-inherit"
              >
                Political Bias Drift in Post-Trained LLMs
              </a>
            </h3>
            <p>
              Research with the Data Science Institute at the University of Chicago studying how political
              bias shifts during post-training. We built an LLM post-training pipeline on Llama 3 models and
              won the poster presentation for the work.
            </p>
          </div>

          <div className="space-y-3 pt-6">
            <h3 className="font-bold">
              <a 
                href="https://github.com/Nedak23/SteamInteractiveGraph" 
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline text-inherit"
              >
                Steam Interactive Graph
              </a>
            </h3>
            <p>
              Interactive network visualization exploring relationships between Steam games based on scraped Steam data. 
              Built with D3.js as an exploration of how different game genres are related to each other.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
} 
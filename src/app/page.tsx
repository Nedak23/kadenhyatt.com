export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl mb-2">Kaden Hyatt</h1>
      
      <div className="mb-8 text-sm text-gray-500">
        <a 
          href="https://www.linkedin.com/in/kaden-hyatt/" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          LinkedIn
        </a>
        {'.'}
        <a 
          href="https://x.com/kaden_hyatt" 
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Twitter
        </a>
        {'.'}
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
          I'm a Data Science and Computer Science major at The University of Chicago. I discovered my fascination 
          with LLM implementation after a{' '}
          <a 
            href="https://www.linkedin.com/feed/update/urn:li:activity:7382792787341037568/" 
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            summer at Replit
          </a>
          . Currently tinkering :)
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
              we have been working on this game for two years now and on course to release in Q1 2026.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl border-b border-black pb-1">Previous Projects</h2>
          
          <div className="space-y-3">
            <h3 className="font-bold">Which Frame Fits?</h3>
            <p>
              Research project with the Social Science Department at the University of Chicago studying 
              how different policy framings affect attitudes towards climate change policy.
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

        <section className="space-y-4">
          <h2 className="text-xl border-b border-black pb-1">Contact</h2>
          <p>
            Feel free to reach out at{' '}
            <a href="mailto:kadenhyatt@gmail.com" className="underline hover:no-underline">
              kadenhyatt@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
} 
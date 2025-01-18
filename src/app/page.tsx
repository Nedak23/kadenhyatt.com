import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Title Section */}
      <section className="mb-24">
        <h1 className="text-5xl font-bold mb-8">
          Hi, I'm Kaden Hyatt
        </h1>
        <div className="text-lg text-gray-600 space-y-4">
          <p>
            I'm a Data Science and Computer Science major at The Univeristy of Chicago. I am a long-time 
            competitive card game player with a passion for game design. 
            With a background in survey science and experimental design, I have a strong foundation in 
            both the qualitative and quantitative aspects of data science.
          </p>
        </div>
        <div className="mt-10 space-x-8">
          <Link 
            href="/experience"
            className="text-lg font-medium underline underline-offset-4"
          >
            View My Work
          </Link>
          <Link 
            href="/contact"
            className="text-lg font-medium underline underline-offset-4"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Current Project Section */}
      <section className="mb-24">
        <div className="border-b border-gray-200 mb-12">
          <h2 className="text-3xl font-bold mb-4">Current Project</h2>
        </div>
        
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold mb-6">Race to Kepler</h3>
          
          <div className="mb-8">
            <Image
              src="/CardSample.png"
              alt="Race to Kepler - Card Sample"
              width={600}
              height={400}
              className="w-full h-auto rounded-md"
              priority
            />
          </div>

          <p className="text-lg text-gray-600 mb-8">
            After being a huge fan of deck-building games for many years, we decided to make 
            our own to take on some of the largest problems we had with the genre. Run like a small startup, 
            we have been working on this game for two years now and on course to release in 2025.
          </p>
          
          <div className="mb-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Built with</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Python</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Figma</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Excel</span>
            </div>
          </div>
          
          <a 
            href="https://racetokepler-com.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium underline underline-offset-4"
          >
            Visit Site →
          </a>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="mb-24">
        <div className="border-b border-gray-200 mb-12">
          <h2 className="text-3xl font-bold mb-4">Other Projects</h2>
        </div>
        
        <div className="space-y-16 max-w-2xl">
          {/* Which Frame Fits? Research */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Which Frame Fits?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Research project with the Social Science Department at the University of Chicago studying how different policy framings affect attitudes towards climate change policy.
            </p>
            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Key Contributions</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Created machine learning algorithms to predict effective policy framings</li>
                <li>Developed models using demographic information and survey responses</li>
                <li>Generated data visualizations for research findings</li>
                <li>Co-authored academic paper on policy learning and framing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Built with</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">R</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Pandas</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">ggplot2</span>
              </div>
            </div>
          </div>

          {/* Personal Website */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Personal Website</h3>
            <p className="text-lg text-gray-600 mb-8">
              The website you are looking at now! Built with Next.js and Tailwind CSS.
            </p>
            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Built with</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">Tailwind CSS</span>
              </div>
            </div>
            <a 
              href="https://github.com/Nedak23/kadenhyatt.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium underline underline-offset-4"
            >
              View Source →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 
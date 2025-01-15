import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Title Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-8 relative">
          <div className="max-w-xl pl-8">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Hi, I'm Kaden Hyatt
            </h1>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                I'm a Data Science and Computer Science major at The Univeristy of Chicago. I am a long-time 
                competitive card game player with a passion for game design. 
                With a background in survey science and experimental design, I have a strong foundation in 
                both the qualitative and quantitative aspects of data science.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <Link 
                href="/experience"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          {/* Profile Image */}
          <div className="absolute top-16 right-32 w-[300px] h-[300px] rounded-full overflow-hidden">
            <Image
              src="/ProfileImage.jpg"
              alt="Kaden Hyatt"
              fill
              className="object-cover object-[center_5%]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Current Project Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">
            Current Project
            <div className="h-1 w-24 bg-blue-600 mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden ml-4">
                <Image
                  src="/CardSample.png"
                  alt="Race to Kepler - Card Sample"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-semibold mb-2">Race to Kepler</h3>
              <p className="text-gray-600 mb-6">
                After being a huge fan of deck-building games for many years, we decided to make 
                our own to take on some of the largest problems we had with the genre. Run like a small startup, 
                we have been working on this game for two years now and on course to release in 2025.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Figma
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Excel
                    </span>
                  </div>
                </div>
                <div className="mt-8">
                  <a 
                    href="https://racetokepler-com.vercel.app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Which Frame Fits? Research */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-fit">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Which Frame Fits?</h2>
                <p className="text-gray-600 mb-6">
                  Research project with the Social Science Department at the University of Chicago studying how different policy framings affect attitudes towards climate change policy.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Key Contributions</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Created machine learning algorithms to predict effective policy framings</li>
                      <li>Developed models using demographic information and survey responses</li>
                      <li>Generated data visualizations for research findings</li>
                      <li>Co-authored academic paper on policy learning and framing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        R
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        Pandas
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        ggplot2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Website */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-fit">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Personal Website</h2>
                <p className="text-gray-600 mb-6">
                  The website you are looking at now! Built with Next.js and Tailwind CSS.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        Git
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                  <div>
                    <a 
                      href="https://github.com/Nedak23/kadenhyatt.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                    >
                      View Source →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
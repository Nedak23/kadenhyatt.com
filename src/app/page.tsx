import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Title Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
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
                href="/about"
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
          <h2 className="text-4xl font-bold mb-8 text-center tracking-tight">
            Current Project
            <div className="h-1 w-24 bg-blue-600 mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/KeplerTitleImage.png"
                alt="Race to Kepler - A space-themed deck-building game"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Race to Kepler</h3>
              <p className="text-gray-600 mb-6">
                Race to Kepler is an innovative deck-building game where players compete to be the first to reach Kepler 452-b.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>Strategic deck building and resource management</li>
                    <li>Competitive bidding for powerful Titan cards</li>
                    <li>Multiple unique ships for high replayability</li>
                    <li>Space-themed adventure racing game</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Figma
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Excel
                    </span>
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
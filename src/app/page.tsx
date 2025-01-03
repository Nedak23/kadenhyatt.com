export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to My Personal Website
        </h1>
        <p className="text-lg mb-4">
          Hello! I'm Kaden Hyatt. This is my personal website where I showcase my work and share my thoughts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>A brief introduction about yourself goes here.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">My Work</h2>
            <p>Highlight some of your key projects or achievements.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 
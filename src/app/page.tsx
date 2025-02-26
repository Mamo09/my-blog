export default function Home() {
  return (
    <div className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">
          Futma Nurhidayat
        </h1>
        <p className="text-amber-800/70 mb-6">
          Frontend Developer | UI/UX Enthusiast
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">About Me</h2>
        <p className="text-amber-800/70 mb-4">
          Hi! I'm a passionate frontend developer with experience in React, Next.js, and TypeScript. 
          I love creating beautiful and functional user interfaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-amber-900">Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="text-amber-800/70">React & Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="text-amber-800/70">TypeScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="text-amber-800/70">Tailwind CSS</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-amber-900">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="text-amber-800/70">your.email@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="text-amber-800/70">Location: Your City</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-amber-900 mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="/portfolio" 
            className="block p-6 border border-amber-100 rounded-lg hover:bg-amber-50 transition-colors"
          >
            <h3 className="font-medium text-amber-900 mb-2">Project Name</h3>
            <p className="text-sm text-amber-800/70">Brief description of the project</p>
          </a>
          <a 
            href="/portfolio" 
            className="block p-6 border border-amber-100 rounded-lg hover:bg-amber-50 transition-colors"
          >
            <h3 className="font-medium text-amber-900 mb-2">Project Name</h3>
            <p className="text-sm text-amber-800/70">Brief description of the project</p>
          </a>
        </div>
      </section>
    </div>
  );
}

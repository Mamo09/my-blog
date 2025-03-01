/* eslint-disable @next/next/no-img-element */
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Project() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">My Projects</h1>
          <p className="text-amber-800/70">
            A collection of my work and side projects
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="bg-white/50 rounded-lg border border-amber-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Link href={`/project/${project.slug}`}>
                <div className="aspect-video relative overflow-hidden bg-amber-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-amber-900">
                      {project.title}
                    </h2>
                    <time className="text-xs text-amber-700/60">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short'
                      })}
                    </time>
                  </div>

                  <p className="text-sm text-amber-800/70 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center text-amber-800 hover:text-amber-900 text-xs font-medium">
                    Read More
                    <svg 
                      className="ml-1.5 w-3.5 h-3.5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
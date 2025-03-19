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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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

                  <div className="p-6">
                    <div className="items-center justify-between mb-2">
                      <h2 className="text-lg font-semibold text-amber-900">
                        {project.title}
                      </h2>
                      
                      <time className="text-sm text-amber-700/60">
                          {new Date(project.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                      </time>
                    </div>

                    <p className="text-amber-800/70 flex-grow">
                      {project.excerpt}
                    </p>

                  
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
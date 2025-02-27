import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <Link 
          href="/project"
          className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-8 text-sm"
        >
          ← Back to Projects
        </Link>

        <article className="bg-white/50 rounded-lg border border-amber-100 overflow-hidden">
          <div className="aspect-video relative overflow-hidden bg-amber-50">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-amber-900">
                {project.title}
              </h1>
              <time className="text-sm text-amber-700/60">
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })}
              </time>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-amber max-w-none mb-6">
              {project.content}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium"
            >
              View Project
              <svg 
                className="ml-2 w-4 h-4" 
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
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
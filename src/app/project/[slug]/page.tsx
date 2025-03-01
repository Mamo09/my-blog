/* eslint-disable @next/next/no-img-element */
import { projects } from '@/data/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetail({ params }: PageParams) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) {
    notFound();
  }

  const sections = [
    { id: 'description', title: 'Description' },
    { id: 'features', title: 'Features' },
    { id: 'screenshots', title: 'Screenshots' },
    { id: 'tech-stack', title: 'Tech Stack' }
  ];

  return (
    <div className="min-h-screen p-8 flex">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex">
          <div className="w-full md:w-3/4">
            {/* Back Button */}
            <Link 
              href="/project"
              className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-8 text-sm"
            >
              ← Back to Projects
            </Link>

            {/* Project Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-amber-900 mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Description Section */}
              <section id="description" className="scroll-mt-8">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">Description</h2>
                <p className="text-amber-800/70">{project.description}</p>
              </section>

              {/* Features Section */}
              <section id="features" className="scroll-mt-8">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-amber-800/70">
                  {project.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>

              {/* Screenshots Section */}
              <section id="screenshots" className="scroll-mt-8">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots?.map((screenshot, index) => (
                    <div key={index} className="aspect-video bg-amber-50 rounded-lg overflow-hidden">
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack Section */}
              <section id="tech-stack" className="scroll-mt-8">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.techStack?.map((tech, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 bg-white/50 rounded-lg border border-amber-100"
                    >
                      <span className="text-sm text-amber-800/70">{tech}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="hidden lg:block fixed top-8 right-8 w-72">
            <div className="sticky top-8">
              <nav className="space-y-3 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-100 shadow-sm">
                <h2 className="text-base font-bold text-amber-900 mb-4">Table of Contents</h2>
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-amber-800/70 hover:text-amber-900 hover:bg-amber-50 px-2 py-1 rounded transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
              </nav>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


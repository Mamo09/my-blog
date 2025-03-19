/* eslint-disable @next/next/no-img-element */
import { projects } from '@/data/projects';
import Link from 'next/link';
import { getAllPosts } from '@/app/components/contents/blog/utils';

export default async function Home() {
  const posts = await getAllPosts();

  if (!posts?.length) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <p className="text-amber-800/70">No blog posts available.</p>
      </div>
    );
  }
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
          Hi! I&apos;m a passionate frontend developer with experience in React, Next.js, and TypeScript. 
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
                <span className="text-amber-800/70">futmahidayat@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                <span className="text-amber-800/70">Location: Medan, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-amber-900 mb-6">Featured Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projects.slice(0, 4).map((project) => (
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
        
      </section>

      {/* Blog */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-amber-900 mb-6">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(0, 4).map((post) => (
            <article 
              key={post.slug}
              className=" p-6 flex flex-col bg-white/50 rounded-lg border border-amber-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col flex-grow">
                <div className="flex flex-col space-y-4 flex-grow">
                  <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-semibold text-amber-900 group-hover:text-amber-800 transition-colors">
                      {post.title}
                    </h2>
                    <time 
                      dateTime={post.date}
                      className="text-sm text-amber-700/60"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  <p className="text-amber-800/70 flex-grow">
                    {post.excerpt}
                  </p>

                
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

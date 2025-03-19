import Link from 'next/link';
import { getAllPosts } from '@/app/components/contents/blog/utils';

export default async function Blog() {
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
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Blog</h1>
          <p className="text-amber-800/70">
            Thoughts, tutorials and insights about web development
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
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
      </div>
    </div>
  );
}

import { getAllPosts } from '@/app/components/contents/blog/utils';
import Link from 'next/link';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-amber-900 mb-4">Blog</h1>
          <p className="text-amber-800/70">
            Thoughts, tutorials and insights about web development
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="group bg-white/50 rounded-xl border border-amber-100 p-6 hover:shadow-lg hover:shadow-amber-100/20 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col space-y-4">
                  {/* Post Header */}
                  <div className="flex items-center justify-between">
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

                  {/* Excerpt */}
                  <p className="text-amber-800/70">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={`${post.slug}-${tag}`}
                          className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-amber-700/60">
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getTableOfContents } from '@/app/components/contents/blog/utils';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}


export default async function BlogPost({ params }: PageParams) {
  try {
    // Await the params object
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      notFound();
    }


    // Define the type for the post object
    interface Post {
      slug: string;
      content: string;
      title: string;
      date: string;
      readingTime: string;
      tags: string[];
    }

    // Cast the post to the new type
    const typedPost = post as Post;

    const toc = getTableOfContents(typedPost.content);
    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    return (
      <div className="min-h-screen p-8 bg-amber-50/20">
        <div className="relative">
          {/* Main Content - Centered */}
          <div className="max-w-2xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-12 text-sm group"
            >
              <svg 
                className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              Back to Blog
            </Link>

            <article className="prose prose-amber max-w-none">
              <header className="mb-8 not-prose">
                <h1 className="text-3xl font-extrabold text-amber-900 mb-4 leading-tight">
                  {typedPost.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-amber-800/70 mb-6">
                  <time dateTime={typedPost.date} className="font-medium">{formatDate(typedPost.date)}</time>
                  <span>•</span>
                  <span>{typedPost.readingTime}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {typedPost.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-amber-100/50 text-amber-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </header>
              
              <div className="text-amber-800/70">
                <MDXRemote 
                  source={post.content}
                  components={{
                    h2: ({ children }) => (
                      <h2 
                        id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                        className="text-2xl font-bold text-amber-800 mt-8 mb-3 leading-snug"
                      >
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 
                        id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                        className="text-xl font-bold text-amber-700 mt-6 mb-2 leading-snug"
                      >
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 
                        id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                        className="text-lg font-bold text-amber-600 mt-4 mb-2 leading-snug"
                      >
                        {children}
                      </h4>
                    ),
                    h5: ({ children }) => (
                      <h5 
                        id={children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                        className="text-base font-bold text-amber-500 mt-3 mb-2 leading-snug"
                      >
                        {children}
                      </h5>
                    ),
                  }}
                />
              </div>
            </article>
          </div>

          {/* Table of Contents - Fixed Position */}
          <div className="hidden lg:block fixed top-8 right-8 w-72">
            <div className="sticky top-8">
              <nav className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-100 shadow-sm">
                <h2 className="text-base font-bold text-amber-900 mb-4">Table of Contents</h2>
                <ul className="space-y-3">
                  {toc.map(({ id, title, level }) => (
                    <li 
                      key={id}
                      className={`${
                        level === 1 ? 'font-medium' : 
                        level === 2 ? 'ml-4' : 
                        level === 3 ? 'ml-8' :
                        'ml-12'
                      }`}
                    >
                      <a
                        href={`#${id}`}
                        className="text-sm text-amber-800/70 hover:text-amber-900 transition-colors block py-1 hover:bg-amber-50 rounded px-2 -mx-2"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}
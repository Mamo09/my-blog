import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getTableOfContents } from '@/app/components/contents/blog/utils';
import TableOfContents from '@/app/components/TableOfContents';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}
const generateId = (text: string) =>
  text.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')  // Ubah karakter selain huruf/angka jadi "-"
      .replace(/^-+|-+$/g, '');

export default async function BlogPost({ params }: PageParams) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      notFound();
    }

    interface Post {
      slug: string;
      content: string;
      title: string;
      date: string;
      readingTime: string;
      tags: string[];
    }

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
                    h1: ({ children }) => {
                      const id = generateId(children?.toString() || '');
                      return <h1 id={id} className="text-4xl font-bold">{children}</h1>;
                    },
                    h2: ({ children }) => {
                      const id = generateId(children?.toString() || '');
                      return <h2 id={id} className="text-3xl font-bold">{children}</h2>;
                    },
                    h3: ({ children }) => {
                      const id = generateId(children?.toString() || '');
                      return <h3 id={id} className="text-2xl font-bold">{children}</h3>;
                    },
                    h4: ({ children }) => {
                      const id = generateId(children?.toString() || '');
                      return <h4 id={id} className="text-xl font-bold">{children}</h4>;
                    },
                    h5: ({ children }) => {
                      const id = generateId(children?.toString() || '');
                      return <h5 id={id} className="text-lg font-bold">{children}</h5>;
                    },
                    h6: ({ children }) => {
                      const id = generateId(children?.toString() || '');
                      return <h6 id={id} className="text-base font-bold">{children}</h6>;
                    }
                  }}
                />
              </div>
            </article>
          </div>

          {toc.length > 0 && (
            <div className="hidden lg:block fixed top-8 right-8 w-72">
              <div className="sticky top-8">
                <TableOfContents toc={toc} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}

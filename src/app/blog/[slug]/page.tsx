import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/app/components/contents/blog/utils';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <Link 
          href="/blog"
          className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-8 text-sm"
        >
          <svg 
            className="w-4 h-4 mr-2" 
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
            <h1 className="text-3xl font-bold text-amber-900 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-amber-800/70">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          
          <div className="text-amber-800/70">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/app/components/contents/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  content: string;
}

interface TableOfContents {
  id: string;
  title: string;
  level: number;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = readdirSync(postsDirectory)
      .filter(fileName => fileName.endsWith('.mdx'));

    const posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = join(postsDirectory, fileName);
      const fileContents = readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as BlogPost;
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const fullPath = join(process.cwd(), 'src/app/components/contents/blog', `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export function getTableOfContents(content: string): TableOfContents[] {
  const headingLines = content.split('\n').filter(line => line.match(/^#{1,3} /));
  
  return headingLines.map(line => {
    const level = line.match(/^#+/)[0].length;
    const title = line.replace(/^#+\s+/, '');
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    return { id, title, level };
  });
}
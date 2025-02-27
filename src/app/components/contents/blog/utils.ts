import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/app/components/contents/blog');

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

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
    .filter(fileName => fileName.endsWith('.mdx'));

  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as BlogPost;
  });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data,
  } as BlogPost;
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
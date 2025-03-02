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

// Fungsi untuk mengambil semua post
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

// Fungsi untuk mengambil post berdasarkan slug
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

// Fungsi untuk membuat Table of Contents (Mendukung h1 hingga h6)
export function getTableOfContents(content: string): TableOfContents[] {
  const headingLines = content.split('\n').filter(line => line.match(/^#{1,6} /));

  return headingLines.map(line => {
    const match = line.match(/^#+/);
    const level = match ? match[0].length : 0;
    const title = line.replace(/^#+\s+/, '');
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Ubah karakter selain huruf/angka menjadi "-"
      .replace(/^-+|-+$/g, '');    // Hapus "-" di awal dan akhir

    return { id, title, level };
  });
}

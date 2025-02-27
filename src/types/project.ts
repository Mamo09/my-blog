export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;  // Markdown content
  date: string;
  image: string;
  tags: string[];
  link: string;
};
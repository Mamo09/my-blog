'use client';

import { useEffect } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  toc: TOCItem[];
}

export default function TableOfContents({ toc }: TableOfContentsProps) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
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
  );
}
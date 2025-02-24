'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/"
              className="text-xl font-bold text-gray-800"
            >
              Futma Nurhidayat
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link 
              href="/"
              className={`${isActive('/')} transition-colors duration-200 text-sm font-medium`}
            >
              Home
            </Link>
            <Link 
              href="/portfolio"
              className={`${isActive('/portfolio')} transition-colors duration-200 text-sm font-medium`}
            >
              Portfolio
            </Link>
            <Link 
              href="/blog"
              className={`${isActive('/blog')} transition-colors duration-200 text-sm font-medium`}
            >
              Blog
            </Link>
            <Link 
              href="/cv"
              className={`${isActive('/cv')} transition-colors duration-200 text-sm font-medium`}
            >
              CV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
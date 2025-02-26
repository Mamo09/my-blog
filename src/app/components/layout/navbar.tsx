'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'text-amber-800 font-medium bg-amber-100/50' : 'text-amber-900/70 hover:text-amber-800 hover:bg-amber-50';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/cv', label: 'CV' },
  ];

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <nav className="w-full max-w-2xl mx-4 bg-white/80 backdrop-blur-md border border-amber-100 rounded-xl shadow-lg shadow-amber-100/20">
          <div className="mx-auto px-4">
            <div className="flex justify-between h-12">
              <div className="flex items-center">
                <Link 
                  href="/"
                  className="text-sm font-serif text-amber-900 hover:text-amber-800 transition-all hover:scale-105"
                >
                  FN
                </Link>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`${isActive(link.href)} px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ease-out hover:scale-105`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-1.5 rounded-lg text-amber-800 hover:bg-amber-50 transition-all hover:scale-105"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div 
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:hidden bg-white/90 backdrop-blur-md rounded-b-xl border-t border-amber-100`}
          >
            <div className="px-2 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${isActive(link.href)} block px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-102`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      {/* Increased spacer height for floating navbar */}
      <div className="h-20"></div>
    </>
  );
}
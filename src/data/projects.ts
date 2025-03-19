import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    readingTime: '5 min read',
    excerpt: 'aplikasi ke 2 aku',
    description: 'A modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a responsive design, dark mode, and blog functionality.',
    date: '2024-02-27',
    image: '/images/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/portfolio',
    features: [
      'Responsive design optimized for all devices',
      'Dark/Light mode with system preference detection',
      'Blog section with Markdown support',
      'Project showcase with filtering options',
      'Contact form with email integration',
      'SEO optimization with Next.js 14'
    ],
    screenshots: [
      'https://manuals.plus/wp-content/uploads/2022/03/FANTECH-Maxfit61-RGB-Mechanical-Keyboard-User-Manual-Featured-image.png',
      'https://manuals.plus/wp-content/uploads/2022/03/FANTECH-Maxfit61-RGB-Mechanical-Keyboard-User-Manual-Featured-image.png',
      'https://manuals.plus/wp-content/uploads/2022/03/FANTECH-Maxfit61-RGB-Mechanical-Keyboard-User-Manual-Featured-image.png',
      'https://manuals.plus/wp-content/uploads/2022/03/FANTECH-Maxfit61-RGB-Mechanical-Keyboard-User-Manual-Featured-image.png'
    ],
    techStack: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Query',
      'MDX'
    ]
  },
  {
    id: '2',
    slug: 'e-commerce-dashboard',
    title: 'E-commerce Dashboard',
    readingTime: '5 min read',
    excerpt: 'aplikasi coba coba',
    description: 'A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.',
    date: '2024-01-15',
    image: '/images/projects/dashboard.jpg',
    tags: ['React', 'TypeScript', 'Material-UI'],
    link: 'https://github.com/yourusername/dashboard',
    features: [
      'Real-time sales analytics and reporting',
      'Inventory management system',
      'Order processing workflow',
      'Customer relationship management',
      'Multi-language support',
      'Dark mode interface'
    ],
    screenshots: [
      'https://manuals.plus/wp-content/uploads/2022/03/FANTECH-Maxfit61-RGB-Mechanical-Keyboard-User-Manual-Featured-image.png',
      'https://manuals.plus/wp-content/uploads/2022/03/FANTECH-Maxfit61-RGB-Mechanical-Keyboard-User-Manual-Featured-image.png',
      'https://manuals.plus/wp-content/uploads/2022/03/FANTECH-Maxfit61-RGB-Mechanical-Keyboard-User-Manual-Featured-image.png',
      'https://manuals.plus/wp-content/uploads/2022/03/FANTECH-Maxfit61-RGB-Mechanical-Keyboard-User-Manual-Featured-image.png'
    ],
    techStack: [
      'React 18',
      'TypeScript',
      'Material-UI',
      'Redux Toolkit',
      'Chart.js',
      'React Query',
      'Socket.io'
    ]
  }
];
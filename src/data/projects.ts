import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'A modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a responsive design, dark mode, and blog functionality.',
    content: `
# Personal Portfolio Website

## Overview
This portfolio website showcases my work and skills as a frontend developer. Built with modern web technologies, it demonstrates my ability to create responsive and accessible web applications.

## Features
- Responsive design that works on all devices
- Light/dark mode support
- Blog section with Markdown support
- Project showcase with filtering
- Contact form with validation

## Technical Details
### Frontend
- Next.js 14 for server-side rendering
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations

### Performance
- Optimized images with next/image
- Static site generation for faster loading
- 100% Lighthouse score

## Challenges & Solutions
One of the main challenges was implementing a smooth dark mode transition...

## Links
- [Live Demo](https://yourwebsite.com)
- [GitHub Repository](https://github.com/yourusername/portfolio)
    `,
    date: '2024-02-27',
    image: '/images/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/portfolio'
  },
  {
    id: '2',
    slug: 'e-commerce-dashboard',
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.',
    content: `
# E-commerce Dashboard

## Project Description
An intuitive dashboard designed for e-commerce store owners to manage their business effectively. Built with React and Material-UI.

## Key Features
- Real-time sales analytics
- Inventory management
- Order processing
- Customer management
- Report generation

## Technical Implementation
### Frontend Architecture
- React with TypeScript
- Redux for state management
- Material-UI components
- Chart.js for analytics

### Backend Integration
- REST API implementation
- Real-time updates with WebSocket
- Secure authentication

## Development Process
The project was developed over 3 months...

## Results
- 40% increase in order processing efficiency
- Positive user feedback
- Improved inventory accuracy

## Links
- [Demo Video](https://youtube.com/...)
- [Case Study](https://medium.com/...)
    `,
    date: '2024-01-15',
    image: '/images/projects/dashboard.jpg',
    tags: ['React', 'TypeScript', 'Material-UI'],
    link: 'https://github.com/yourusername/dashboard'
  }
];
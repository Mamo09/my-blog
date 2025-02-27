import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(146 64 14 / 0.7)',
            'h1, h2, h3, h4': {
              color: 'rgb(120 53 15)',
              fontWeight: '700',
            },
            a: {
              color: 'rgb(146 64 14)',
              '&:hover': {
                color: 'rgb(120 53 15)',
              },
            },
            strong: {
              color: 'rgb(120 53 15)',
            },
            code: {
              color: 'rgb(120 53 15)',
              backgroundColor: 'rgb(254 243 199)',
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
            },
            pre: {
              backgroundColor: 'rgb(254 243 199)',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;

export default config;

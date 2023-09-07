import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#232323',
          medium: '#171717',
          dark: '#121212',
        },
        text: {
          grey: '#a7a7a7',
        },
      },
    },
  },
  plugins: [],
}
export default config

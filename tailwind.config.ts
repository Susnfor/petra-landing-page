import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: 'rgba(var(--primary-color))',
        secondary: 'rgba(var(--secondary-color))',
        third: 'rgba(var(--third-color))',
        fourth: 'rgba(var(--fourth-color))',
        darktext: 'rgba(var(--dark-text))',
        mustard: 'rgba(var(--mustard))',
        lightmustard: 'rgba(var(--light-mustard))',
        maroon: 'rgba(var(--maroon))',
        fifth: 'rgba(var(--fifth-color))',
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

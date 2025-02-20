import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4500', // Orange
        secondary: '#000000', // Black
        background: '#FFFFFF', // White
        accent: '#00FFFF', // Cyan
      },
    },
  },
  plugins: [],
} satisfies Config;

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF4500', // Orange (Accent)
        secondary: '#FFFFFF', // White (Text)
        navy: '#0A192F', // Dark Navy Blue (Background)
        lightNavy: '#1F2A40', // Lighter Shade of Navy (Optional for hover effects)
        accent: '#00FFFF', // Cyan (Highlight)
        neonPink: '#FF00FF', // Neon Pink (For navigation links)
        cyan: '#00F0FF', // Cyan (Hover state for links)
      },
      fontFamily: {
        bungee: ['Bungee', 'cursive'], // Custom font for navigation links
      },
    },
  },
  plugins: [],
};
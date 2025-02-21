module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: '#FF4500', // Orange (Accent)
        secondary: '#FFFFFF', // White (Text)
        navy: '#0A192F', // Dark Navy Blue (Background)
        lightNavy: '#1F2A40', // Lighter Shade of Navy (Optional for hover effects)
        accent: '#00FFFF', // Cyan (Highlight)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font family
      },
    },
  },
  plugins: [],
};
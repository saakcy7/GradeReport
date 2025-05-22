
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        primary: '#1E3A8A', // Blue
        secondary: '#FBBF24', // Yellow
        accent: '#EF4444', // Red
        background: '#F9FAFB', // Light Gray
        text: '#111827', // Dark Gray
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '172': '43rem',
        '184': '46rem',
        '192': '48rem',
      },
    },
  },
  plugins: [],
};

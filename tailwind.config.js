/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'], // 'Inter' is the font name
      },

      colors: {
        'text-color': '#3A3A3A',
      },
    },
  },
  plugins: [],
};

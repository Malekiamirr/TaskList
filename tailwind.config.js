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
      boxShadow: {
        'todo-shadow':
          'rgba(110, 30, 41, 0.05) 0px 6px 24px 0px,rgba(110, 30, 41, 0.08) 0px 0px 0px 1px',
        'doing-shadow':
          'rgba(121, 91, 25, 0.05) 0px 6px 24px 0px,rgba(121, 91, 25, 0.08) 0px 0px 0px 1px',
        'done-shadow':
          'rgba(40, 108, 26, 0.05) 0px 6px 24px 0px,rgba(40, 108, 26, 0.08) 0px 0px 0px 1px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-primary':'#22282A',
      },
    },
  },
  plugins: [
    require('tailwindcss-no-scrollbar'),
            require('daisyui'),
  ],
}
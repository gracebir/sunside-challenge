/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow':['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
      },
      colors: {
        "red-color":"var(--soft-red)",
        "yellow-color":"var(--yellow)",
        "cyan-color":"var(--dark-desatured-cyan)",
        "dark-blue":"var(--dark-blue)",
        "moderate-cyan":"var(--dark-moderate-cyan)",
        "desautred-blue":"var(--very-dark-desaturated-blue)",
        "grayish-very":"var(--very-dark-grayish-blue)",
        "grayish-blue":"var(--dark-grayish-blue)",
        "grayish-blue":"var(--grayish-blue)",
        "white-color":"var(--white)",
      }
    },
  },
  plugins: [],
}


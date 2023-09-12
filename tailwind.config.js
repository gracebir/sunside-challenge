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
        "grayish-dark":"var(--dark-grayish-blue)",
        "grayish-blue":"var(--grayish-blue)",
        "white-color":"var(--white)",
      },
      backgroundImage:{
        "transform-desk":"url('./assets/desktop/image-transform.jpg')",
        "transform-mob":"url('./assets/mobile/image-transform.jpg')",
        "stand-out-desk":"url('./assets/desktop/image-stand-out.jpg')",
        "stand-out-mob":"url('./assets/mobile/image-stand-out.jpg')",
        "graphic-desk": "url('./assets/desktop/image-graphic-design.jpg')",
        "graphic-mob": "url('./assets/mobile/image-graphic-design.jpg')",
        "photography-desk": "url('./assets/desktop/image-photography.jpg')",
        "photography-mob": "url('./assets/mobile/image-photography.jpg')",

        "orange-desk":"url('./assets/desktop/image-gallery-orange.jpg')",
        "milk-desk":"url('./assets/desktop/image-gallery-milkbottles.jpg')",
        "sugar-desk":"url('./assets/desktop/image-gallery-sugarcubes.jpg')",
        "cone-desk":"url('./assets/desktop/image-gallery-cone.jpg')",
        "orange-mob":"url('./assets/mobile/image-gallery-orange.jpg')",
        "milk-mob":"url('./assets/mobile/image-gallery-milkbottles.jpg')",
        "sugar-mob":"url('./assets/mobile/image-gallery-sugar-cubes.jpg')",
        "cone-mob":"url('./assets/mobile/image-gallery-cone.jpg')",
      }
    },
  },
  plugins: [],
}


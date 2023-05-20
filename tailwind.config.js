
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-100":"#1B1A17",
        "primary-200":"#1F1E1B",
        "primary-300":"#21201D",
        "primary-400":"#32312E",
        "secondary-100":"#A35709",
        "secondary-200":"#FF8303",
        "tertiary":"#F0E3CA"
      },
      fontFamily:{
        inconsolata: ['Inconsolata', "sans-serif"],
        impact:['Impact', "sans-serif"]
      },
      screens:{
        xs:"480px",
        sm:"768px",
        md:"1060px",
      },
      backgroundImage:{
        logo: "url('@/assets/code.png')"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx}",
    "./src/pages/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        nctLightYellowGreen: "rgb(239, 249, 187)",
        nctGreen: "rgb(204, 237, 29)",
        nctDarkGrayish: "rgb(111, 129, 17)",
        nctBlack: "rgb(0, 0, 0)",
        nctWhite: "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};

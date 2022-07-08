/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      white: {
        100: "#FFFFFF",
        200: "#F3F3F3E3",
        300: "#F3F3F3",
      },
      dark: {
        100: "#262B3CE3",
        200: "#262B3C",
        300: "#DADCE008",
      },
      gray: {
        100: "#D3D6DA", //button box
        200: "#939B9F4D", //wordle light box
        300: "#939B9F33", //wordle dark box
        400: "#DADCE04D", //keyboard
        500: "#56575E", //button text
        600: "#939B9F", //wordle box
      },
      black: "#000",
      green: "#6AAA64",
      yellow: "#CEB02C",
    },
  },
  plugins: [],
};

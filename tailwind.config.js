/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1d1f",
        secondary: "#71b100",
      },
      fontFamily: {
        defFont: ["Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

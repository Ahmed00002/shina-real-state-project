/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1d1f",
        secondary: "#71b100",
        btnColor: "#3f4249",
      },
      fontFamily: {
        defFont: ["Inter", "sans-serif"],
      },
      theme: {
        md: "1024px",
      },
    },
  },
  plugins: [require("daisyui")],
};

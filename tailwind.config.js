/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: "true",
        padding: "4rem",
      },
      colors: {
        primaryColor: "#0287a8",
        secoundaryColour: "#00c3c7",
      },
    },
  },
  plugins: [],
};

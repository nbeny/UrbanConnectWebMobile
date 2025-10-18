/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1193d4",
          "background-light": "#f6f7f8",
          "background-dark": "#101c22",
        },
        fontFamily: {
          display: ["Manrope", "sans-serif"],
        },
        borderRadius: {
          DEFAULT: "0.25rem",
          lg: "0.5rem",
          xl: "0.75rem",
          full: "9999px",
        },
      },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
  };
  
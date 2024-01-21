/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "rgba(99, 99, 99, 0.1) 0px 2px 6px 0px",
      },
      colors: {
        green: "#4caf50",
      },
    },
  },
  plugins: [],
};

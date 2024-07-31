/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-blue": {
          DEFAULT: "#a0c4ff",
          light: "#c4e1ff",
          dark: "#5a8cdb",
        },
      },
    },
  },
  plugins: [],
};

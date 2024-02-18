/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "#A7A7A7",
        "gray-200": "#D9D9D9",
        "blue-100": "#2C2C52",
        "blue-200": "#4A5A71",
        "blue-300": "#90C1D7",
        "blue-400": "#E3F6F9",
        "green-100": "#486255",
        "green-200": "#86B6A6",
      },
    },
  },
  plugins: [],
};

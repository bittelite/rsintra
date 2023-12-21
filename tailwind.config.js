/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./(components)/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#ffffff",
        page: "#2F2E41",
        card: "#EEEEEE",
        main: "#ffffff",
        "card-hover": "#EAEAEC",
        "default-text": "#2F2E41",
        "blue-accent": "#6387ff",
        "blue-accent-hover": "#6C63FF",
        "deep-accent": "#2F2E41",
        "deep-accent-hover": "#3F3D56",
      },
    },
  },
  plugins: [],
};

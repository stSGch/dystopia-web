/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dyst: {
          orange: "#cd4903",
          "orange-bright": "#ff6a1a",
          "orange-deep": "#7a2a02",
          steel: {
            50:  "#e8eaee",
            200: "#b9bec7",
            400: "#6b7079",
            700: "#2b2e34",
            900: "#14161a",
          },
          bg: "#07080a",
        },
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"]
      },
      colors: {
        "base": "#0B0B0B",
        "darkgray": "#2A2A2A",
        "primaryblack": "#1A1A1A",
        "secondarygray": "#676767",
        "lightpurple": "#8162FF",

      },
      screens: {
        "rg": "832px"
      }
    },
  },
  plugins: [],
}
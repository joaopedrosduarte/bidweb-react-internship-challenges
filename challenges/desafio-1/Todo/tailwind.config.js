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
        'basegray': "#191919",
        'lightgray': "#333333",
        'darkblue': "#1E6F9F",
        'green': "#1BA339",
      }
    },
  },
  plugins: [],
}
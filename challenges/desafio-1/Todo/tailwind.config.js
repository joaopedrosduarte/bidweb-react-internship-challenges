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
        'bggray': "#191919",
        'basegray': "#262626",
        'lightblue': "#4EA8DE",
        'textgray': "#666666",
        'lightgray': "#333333",
        'darkblue': "#1E6F9F",
        'green': "#1BA339",
      }
    },
  },
  plugins: [],
}
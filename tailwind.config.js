/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue : "#001F3F",
        royal: "#0074E4",
        gold: "#FFD700",
        white: "#FFFFFF",
        grey: "#F4F4F4",
      }
    }
  },
  plugins: [],
}
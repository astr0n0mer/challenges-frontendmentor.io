/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        "light-pink": "hsl(321, 100%, 78%)",
        "light-red": "hsl(0, 100%, 63%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "very-pale-blue": "hsl(207, 100%, 98%)",
        "very-bright-blue": "hsl(192 100% 50%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',  // we are making sure that the darkmode takes effect when we modify it from our theme provider
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],   // We are bringing our google font from index.css to apply across app
      },
    },
  },
  plugins: [],
}

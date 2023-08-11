/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A0AA",
        secondary: "#329671",
        tertiary: "#2B93CE",
        blue: "#2B93CE",
        black: "#211F1F",
        "red-crimson": "#DC143C",

        red: "#F55A5A",
        "soft-red": "#FFD9C3",
        
        // Green
        green: "#3EBB8D",
        green2: "#C3FFE9",
        "soft-green": "#F4FFFF",
        
        grey: "#8A8A8A",
        "soft-grey": "#F9F9F9",
        "soft-grey2": "#EEEEEE",
        lightGrey: "#EDEDED",
        lightGrey2: "#D4D4D4"
      },
    },
  },
  plugins: [],
}
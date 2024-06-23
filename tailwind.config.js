/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#702D77",
        secondary: "#F05327",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
     
      
      screens: {
        mobile: "390px",
        tablet: "712px",
        tabletmd: "992px",
        laptop: "1024px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
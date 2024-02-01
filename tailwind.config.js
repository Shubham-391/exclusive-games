/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter"],
      anton: ["Anton"],
    },
    backgroundImage: {
      headerbg:
        "linear-gradient(180deg, rgba(0,0,0,0)89.07%, #00141B 97.5%), url('/src/assets/images/headerbg.webp')",
      button2bg: "linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)",
      button2bg2: "linear-gradient(306.99deg, #51C8EF -13.72%, #FFFFFF 102.02%)",
    },
  },
  plugins: [],
};

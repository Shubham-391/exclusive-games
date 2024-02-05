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
        "url('/src/assets/images/headerbg.webp'), linear-gradient(180deg, rgba(0,0,0,0)89.07%, #00141B 97.5%)",
      button2bg: "linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)",
      button2bg2:
        "linear-gradient(306.99deg, #51C8EF -13.72%, #FFFFFF 102.02%)",
      section2bg: "url(/src/assets/images/section2bg.webp)",
      section3bg: "url(/src/assets/images/section3bg.webp)",
      section3bg2: "url(/src//assets//images/section3bg2.webp)",
      section3bg3: "url(/src/assets/images/section3bg3.webp)",
      section4bg: "url(/src/assets/images/section4bg.webp)",
      bgtick: "url(/src//assets//images/tick.webp)",
      section5bg1:
        "linear-gradient(306.99deg,rgba(81,200,239,0.04)-13.72%,rgba(122,245,122,0.04)102.02%);",
      section5bg2:
        "linear-gradient(306.99deg,rgba(81,200,239,0.5)-13.72%,rgba(122,245,122,0.5)102.02%)",
      luxury: "url(/src//assets//images/luxury.webp)",
      final: "url(/src/assets/images/final.webp)",
    },
  },
  plugins: [],
};

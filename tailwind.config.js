/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      colors: {
        "main-black": "#2d2e32",
        "main-white": "#f2eded",
        "main-offwhite": "#f0f0f1",
        "main-green": "#80c679",
        "main-gray": "#d3d3d3",
        "linkedin-blue": "#0a66c2",
        "galactic-reborn-purple": "#6f5bde",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "full-page": "-1px 2px 0px 2000px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "profile-image": "url(./src//assets/images/shina.png)",
      },
      keyframes: {
        "image-flow": {
          "0%, 100%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
        },
        "status-glow": {
          "0%": {
            "box-shadow": "0 0 0 0 rgba(36, 171, 30, 0.5)",
          },
          "50%": {
            "box-shadow": "0 0 10px 8px rgba(36, 171, 30, 0)",
          },
        },
      },
      animation: {
        "image-flow": "image-flow 8s ease-in-out infinite",
        "status-glow": "status-glow 2s ease-in-out infinite",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(3, auto)",
      },
      gridColumn: {
        "only-1": "1 / 1",
        "only-2": "2 / 2",
        "only-3": "3 / 3",
      },
    },
  },
  plugins: [],
};

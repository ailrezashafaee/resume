/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C151D",
        primary: "#FFE071",
        primary_hover: "#fae598",
        gray: "#A3ABB2",
        light_card: "#171F26",
        text: "#3D3D3D",
      },
    },
  },
  plugins: [],
};

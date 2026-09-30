/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F4F1E8",
        ink: "#101010",
        concrete: "#8E8C86",
        smoke: "#E5E0D3",
        laranja: "#E85D1F",
        roxo: "#5B2A86",
        verde: "#1E6B3A",
        azul: "#1D4ED8",
        amarelo: "#E8B400",
      },
      fontFamily: {
        serif: ["'Instrument Serif'", "'DM Serif Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Manrope'", "'DM Sans'", "'Inter'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};

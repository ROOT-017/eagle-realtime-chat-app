/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "abstract-bg":
          "url('https://imgs.search.brave.com/RIUFkbLBqrdF9auOixtcYRrKVBlbxi2d3l-OI9SDkqw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/Mi8xOC8yMS8xOC9w/ZW9wbGUtMzE2MzU1/Nl82NDAuanBn')",
        "sm-abstract-bg":
          "url('https://images.pexels.com/photos/1237528/pexels-photo-1237528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        "lg-abstract-bg":
          "url('https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      colors: {
        "oxford-blue": {
          DEFAULT: "#060b26",
          200: "#060b2699",
        },
        "taupe-gray": "#857C8D",
        azure: "#D6E5E3",
        "tiffany-blue": "#9FD8CB",
        space_cadet: {
          DEFAULT: "#2c3047",
          100: "#090a0e",
          200: "#12141d",
          300: "#1b1e2b",
          400: "#24273a",
          500: "#2c3047",
          600: "#4b5278",
          700: "#6e76a4",
          800: "#9ea4c3",
          900: "#cfd1e1",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

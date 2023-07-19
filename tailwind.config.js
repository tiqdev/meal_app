/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        floating:
          "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 27px 54px 0px, rgba(0, 0, 0, 0.03) 0px 17.5px 31.625px 0px, rgba(0, 0, 0, 0.024) 0px 10.4px 17.2px 0px, rgba(0, 0, 0, 0.02) 0px 5.4px 8.775px 0px, rgba(0, 0, 0, 0.016) 0px 2.2px 4.4px 0px, rgba(0, 0, 0, 0.01) 0px 0.5px 2.125px 0px",
        floating_icon: "0 0.6px 2px rgba(0,0,0,.06)",
      },
      backdropBlur: {
        floating: "24px",
      },
      backdropSaturate: {
        floating: "20",
      },

      backgroundImage: {
        overlay_pattern_dark_bottom:
          "linear-gradient(to bottom, transparent, #008080 80%)",
        overlay_pattern_light_bottom:
          "linear-gradient(to bottom, transparent, #ecfdf5 80%)",
        overlay_pattern_dark_top:
          "linear-gradient(to top, transparent, #008080 80%)",
        overlay_pattern_light_top:
          "linear-gradient(to top, transparent, #ecfdf5 80%)",
      },

      colors: {
        cream: "#fefae0",
        soft_green: "#606c38",
        dark_green: "#283618",
        blue_white: "#ecfdf5",
        blue_soft: "#008080",
        blue_soft_border: "rgba(0, 128, 128,0.2)",
        blue_white_border: "rgba(236, 253, 245,0.2)",
        orange: "#dda15e",
        floating_bg: "hsla(0,0%,100%,.88)",
        floating_icon_border: "rgba(0,0,0,.12)",
        floating_icon_hover: "rgba(0,0,0,.06)",
      },

      fontFamily: {
        lora: ["Lora", "serif"],
        satoshi: ["Satoshi", "sans-serif"],
        arabic: ["Noto Sans Arabic"],
      },
    },
  },
  plugins: [],
};

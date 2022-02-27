module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      primary: "#FF6464",
      secondary: "#00A8CC",
      dark: "#21243D",
      light: "#8695A4",
    },
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        myfontFamily: ["Heebo", "sans-serif"],
      },
      screens: {
        xxl: "1152px",
      },
    },
  },
  plugins: [],
  css: ["@/assets/css/main.css"],
};

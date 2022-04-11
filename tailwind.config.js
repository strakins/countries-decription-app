module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        lightModeBackground:"hsl(0, 0%, 98%)",
        darkModeBackground:"hsl(207, 26%, 17%)",
        lightModeText: "hsl(200, 15%, 8%)",
        lightModeElement:" hsl(0, 0%, 100%)",
        darkModeText:"hsl(0, 0%, 100%)",
        darkModeElement:"hsl(209, 23%, 22%)",
      }
    },
  },
  plugins: [],
}

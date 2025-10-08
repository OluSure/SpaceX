module.exports = {
  content: [
    "./index.html",
    "./SpaceX/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
   variants: {
        extend: {
          display: ['group-hover'],
        },
      },
}
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {}
  }
}
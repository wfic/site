module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        fontFamily: {
            "Cinzel": ['Cinzel Decorative', 'cursive']
        }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '12rem',
      },
    },
  },
  plugins: [],
}

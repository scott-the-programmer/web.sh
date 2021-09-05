module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nav-bar-yellow': '#DBE8D4',
        'nav-bar-background': '#525e65',
        'svg-last': '#657076',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

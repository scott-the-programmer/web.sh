module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nav-bar-yellow': '#DBE8D4',
        'nav-bar-background': '#1B2A60',
        'svg-last': '#c0d8f7',
        'blog-text': '#142f6e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

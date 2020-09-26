module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      'white': '#f1faee',
      'light-red': '#e94957',
      'red': '#e63946',
      'dark-red': '#e42535',
      'light-blue': '#a8dadc',
      'blue': '#457b9d',
      'dark-blue': '#1d3557',
      'golang': '#00add8',
      'python': '#3572a5',
      'dark-green': '#073B4C',
      'green': '#31ebb9',
    },
    extend: {
      backgroundImage: () => ({
        'dark-theme':
          'linear-gradient(400deg,#073b4c 75%,#31ebb9 0),linear-gradient(58deg,#073b4c 27%,#31ebb9 82%),linear-gradient(262deg,#fddaca 49%,#fefbfb 68%)',
        'light-theme':
          'linear-gradient(400deg,#f1faee 75%,#31ebb9 0),linear-gradient(58deg,#f1faee 27%,#31ebb9 82%),linear-gradient(262deg,#f1faee 49%,#fefbfb 68%)',
      }),
    },
  },
  variants: {
    border: ['hover'],
  },
  plugins: [],
};

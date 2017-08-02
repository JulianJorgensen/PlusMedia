module.exports = {
  plugins: {
    'postcss-import': {
      root: __dirname,
    },
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-cssnext': {},
    'postcss-font-magician' : {
      variants: {
        'Teko': {
          '300': [],
          '400': [],
          '500': [],
          '600': []
        },
        'Open Sans': {
          '400': [],
          '600': []
        }
      },
      foundries: ['google']
    }
  },
};

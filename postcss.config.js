/* eslint-disable */
const envConfig = require(`./config/env/${process.env.DEPLOY  || 'default'}.json`);

module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-import'),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: envConfig.cssVariables,
        },
        customMedia: {
          extensions: {
            '--phone': '(min-width: 544px)',
            '--tablet': '(min-width: 768px)',
            '--desktop': '(min-width: 992px)',
            '--large-desktop': '(min-width: 1200px)',
          },
        },
      },
    }),
  ],
};

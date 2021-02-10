const sassResourcesLoader = require('craco-sass-resources-loader');
const CracoAlias = require('craco-alias');

module.exports = {
  mode: 'development',
  output: {
    path: __dirname,
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/modules/look/styles/_resources.scss',
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: './src',
      },
    },
  ],
};

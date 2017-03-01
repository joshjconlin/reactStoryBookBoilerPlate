// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const defaultConfig = require('../internals/webpack/webpack.dev.babel');

const config = Object.assign({}, defaultConfig, {

  module: {
    loaders: [
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      },
      {
        test: /\.css/,
        loader: "url-loader",
        query: { mimetype: "text/css" }
      },
    ],
  },
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true,
  },
  resolve: {
    // Since we ship with json-loader always, it's better to move extensions to here
    // from the default config.
    extensions: ['.js', '.json', '.jsx', ''],
    alias: {
      '@kadira/storybook-addons': require.resolve('@kadira/storybook-addons'),
      'react-router-original': require.resolve('react-router'),
      'react-router': require.resolve('./rr.js'),
      'react-native': 'react-native-web',
    }
  },

  devtool: 'eval',
  // entry: {
  //   manager: [require.resolve('babel-polyfill'), require.resolve('airbnb-js-shims'), require.resolve('@kadira/storybook/dist/client/manager')],
  //   preview: [require.resolve('babel-polyfill'), require.resolve('airbnb-js-shims'), require.resolve('@kadira/storybook/dist/server/config/globals'), require.resolve('webpack-hot-middleware/client') + '?reload=true']
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/[name].bundle.js',
    publicPath: '/'
  },
});

module.exports = function (defaultConfig) {
  return Object.assign({}, config, defaultConfig, {
    // Override with custom devtool if provided
    devtool: config.devtool || defaultConfig.devtool,
    entry: {
      manager: ['babel-polyfill'].concat(defaultConfig.entry.manager),
      preview: ['babel-polyfill'].concat(defaultConfig.entry.preview),
    },
    // We need to use our and custom plugins.
    plugins: [].concat(defaultConfig.plugins, config.plugins || []),
    module: Object.assign({}, defaultConfig.module, config.module, {
      loaders: [].concat(defaultConfig.module.loaders, config.module.loaders || [])
    }),
    resolve: Object.assign({}, defaultConfig.resolve, config.resolve, {
      alias: Object.assign({}, defaultConfig.alias, config.resolve && config.resolve.alias)
    })
  });
};
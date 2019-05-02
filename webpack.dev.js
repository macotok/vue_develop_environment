const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    port: 3000,
    open: true,
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/images/'),
        to: path.resolve(__dirname, 'dist/images'),
      },
      {
        from: path.resolve(__dirname, 'src/assets/media/'),
        to: path.resolve(__dirname, 'dist/media'),
      },
    ]),
  ],
});

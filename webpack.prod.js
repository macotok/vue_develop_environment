const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/images/'),
        to: path.resolve(__dirname, 'public/images'),
      },
      {
        from: path.resolve(__dirname, 'src/assets/media/'),
        to: path.resolve(__dirname, 'public/media'),
      },
    ]),
  ],
});

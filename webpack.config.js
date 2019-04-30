const AutoPrefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = [
  {
    entry: {
      app: [
        './src/main.js',
        './src/assets/sass/style.scss',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/',
    },
    devServer: {
      contentBase: './dist',
      watchContentBase: true,
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader'],
            },
            {
              use: ['raw-loader', 'pug-plain-loader'],
            },
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  AutoPrefixer(
                    {
                      browsers: ['last 2 versions', 'Android >= 4'],
                    },
                  ),
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './webfonts',
              publicPath: '../webfonts',
            },
          }],
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', 'json', '.vue'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
      },
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src/assets/images/'),
          to: path.resolve(__dirname, 'dist/assets/images'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/media/'),
          to: path.resolve(__dirname, 'dist/assets/media'),
        },
      ]),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
      }),
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '95-100',
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'css/style.css',
        chunkFilename: 'css/[id].css',
      }),
      new StylelintPlugin({
        files: ['**/*.vue'],
      }),
      new VueLoaderPlugin(),
    ],
  },
];

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/scripts.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/html/index.html')
    }),
    new MiniCssExtractPlugin({ filename: 'css/styles.css' }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './src/assets'), to: 'assets' }
    ]),
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.s?css/i,
      use : [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { url: false } },
        'sass-loader'
      ]
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          minimize: true,
          interpolate: true,
          attrs: false
        }
      }
    }]
  },
};

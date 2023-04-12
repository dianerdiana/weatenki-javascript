'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin(),
    new ESLintPlugin(),
    new webpack.ProvidePlugin({
      $: require.resolve('jquery'),
      jQuery: require.resolve('jquery'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
}

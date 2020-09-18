/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const mode = process.env.NODE_ENV || DEVELOPMENT;

const config = {
  context: path.resolve(__dirname, '.'),

  entry: {
    main: ['core-js', `./src/index.tsx`],
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve('./dist'),
    hot: true,
    port: 9000,
  },

  resolve: {
    modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      react: require.resolve('react'),
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json'),
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve('src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './images/',
        },
      },
    ],
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      minify:
        mode === PRODUCTION
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

module.exports = config;

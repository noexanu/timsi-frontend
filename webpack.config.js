import { dirname, resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const currentFilePath = dirname(resolve('./webpack.config.js'));

export default {
  mode: 'production',
  entry: {
    index: {
      import: './src/index.tsx',
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(currentFilePath, './build'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(currentFilePath, './public/index.html'),
    }),
  ],
  resolve: {
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
};

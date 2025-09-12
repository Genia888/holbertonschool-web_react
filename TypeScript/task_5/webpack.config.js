const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./js/main.ts",
  
  devtool: "inline-source-map",
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: false
        }
      }
    ]
  },
  
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    port: 8080,
  },
  
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

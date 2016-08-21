var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require("path")

var BUILD_DIR = path.resolve(__dirname, "build")
var APP_DIR = path.resolve(__dirname, "app")

module.exports = {
  devtool: "eval-source-map",
  entry: APP_DIR + "/main.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css?modules!postcss")
      },
      {
        test: /\.inline.svg$/,
        loader: 'babel!svg-react'
      },
    ]
  },

  postcss: [
    require("autoprefixer")
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: APP_DIR + "/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css")
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },

  resolve: {
    root: [path.resolve(APP_DIR)]
  }
}

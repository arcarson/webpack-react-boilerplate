var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  devtool: "eval-source-map",
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
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
      }
    ]
  },

  postcss: [
    require("autoprefixer")
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css")
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}

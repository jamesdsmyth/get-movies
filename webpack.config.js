const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // minify css for production

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "[name].css",
  chunkFilename: "[id].css"
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // sass-loader to convert sass to css
        // css-loader to import css into the js
        // style-loader to create the <style /> tag in the html page
        test: /\.scss$/,
        use: [
          // in development we use style-loader
          // in production we use a minified file using the MiniCssExtractPlugin.loader
          process.env.NODE_ENV !== 'production' ? 'style-loader' : miniCssExtractPlugin,
          {
            loader: "css-loader", 
            options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader", 
            options: {
              sourceMap: true
            }
        }]
      }
    ],
  },
  plugins: [htmlWebpackPlugin, miniCssExtractPlugin]
}
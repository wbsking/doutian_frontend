var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:{
    main: "./src/js/main.js"
  },
  output:{
    path: require("path").resolve("./dist/"),
    filename: "./js/[name].js",
    chunkFilename: "./js/chunk.js"
  },
  module: {
    loaders: [
      {test: /\.js/, loaders: ["jsx-loader"]},
      {test: /\.less/, loaders: ["style", "css", "less"]},
    ]
  },
  reslove:{
    extensions: ["", "js", "css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "home.html",
      template: "src/app/home.html"
    })
  ]
}

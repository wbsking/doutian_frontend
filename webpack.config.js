module.exports = {
  entry:{
    main: "./src/js/main.js"
  },
  output:{
    path: require("path").resolve("./dist/js/"),
    filename: "[chunkhash:8].[name].js",
    cunkFilename: "[chunkhash:8].chunk.js"
  },
  module: {
    loaders: [
      {test: /\.js/, loaders: ["jsx-loader"]},
      {test: /\.less/, loaders: ["style", "css", "less"]},
    ]
  },
  reslove:{
    extensions: ["", "js", "css"]
  }
}

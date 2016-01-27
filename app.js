var http = require("http");
var koa = require("koa");
var webpackDevMiddleware = require("koa-webpack-dev-middleware");
var webpack = require("webpack");
var webpackConf = require("./webpack.config");

var app = koa();

app.use(webpackDevMiddleware(webpack(webpackConf), {
  contentBase: webpackConf.output.path,
  hot: true
}));

app = http.createServer(app.callback());

app.listen(8005, "0.0.0.0", function(){
  console.log("app listen success");
})

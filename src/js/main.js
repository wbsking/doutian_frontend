var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");
var HomePage = require("./pages/home");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var App = React.createClass({
  render: function(){
    return (
      <div id="mainContent">
        <HomePage />
      </div>
    );
  }
});


var routes = (
  <Route path="/" component={App} />
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById("app"));

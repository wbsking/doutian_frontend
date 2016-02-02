var React = require("react");
var NavHeader = require("../components/NavHeader");
var WelcomeBanner = require("../components/WelcomeBanner");
var PostBar = require("../components/PostBar");


var HomePage = module.exports = React.createClass({
  render: function(){
    return (
        <div id="homeHeader">
          <NavHeader />
          <PostBar />
          <WelcomeBanner />
        </div>
    );
  }
});

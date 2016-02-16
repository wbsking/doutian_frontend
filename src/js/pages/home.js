var React = require("react");
var NavHeader = require("../components/NavHeader");
var WelcomeBanner = require("../components/WelcomeBanner");
var PostBar = require("../components/PostBar");
var Beian = require("../components/Beian");
var ScrollTop = require("../components/ScrollTop");
var AboutLink = require("../components/AboutLink");


var HomePage = module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <div id="homeHeader">
          <NavHeader />
        </div>
        <div id="PostContent">
          <PostBar />
          <WelcomeBanner />
        </div>
        <div id="Footer">
          <Beian />
          <ScrollTop />
          <AboutLink />
        </div>
      </div>
    );
  }
});

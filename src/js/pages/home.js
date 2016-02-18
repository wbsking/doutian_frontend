var React = require("react");
var NavHeader = require("../components/NavHeader");
var WelcomeBanner = require("../components/WelcomeBanner");
var PostBar = require("../components/PostBar");
var Beian = require("../components/Beian");
var ScrollTop = require("../components/ScrollTop");
var AboutLink = require("../components/AboutLink");
var $ = require("jquery");
var UserInfoStore = require("../stores/UserInfoStore");
var CreateCatePop = require("../components/popup/CreateCate");
var CreateBlogPop = require("../components/popup/CreateBlog");


var HomePage = module.exports = React.createClass({
  getInitialState: function(){
    return {};
  },
  getUserInfo: function(){
    var ws = this;
    $.ajax({
      url: "/api/v1/user/info",
      method: "GET",
      success: function(data){
        if (data.code == "0") {
          UserInfoStore.setUser(data.data);
          ws.setState(data.data);
        }
      }
    });
  },
  componentDidMount: function(){
    this.getUserInfo();
  },
  render: function(){
    var welcomeClass = this.state.user_id ? "hide": "unhide"
    return (
      <div>
        <div id="homeHeader">
          <NavHeader />
        </div>
        <div id="PostContent">
          <PostBar />
          <WelcomeBanner welcomeClass={welcomeClass} />
        </div>
        <div id="Footer">
          <Beian />
          <ScrollTop />
          <AboutLink />
        </div>
        <CreateCatePop />
        <CreateBlogPop />
      </div>
    );
  }
});

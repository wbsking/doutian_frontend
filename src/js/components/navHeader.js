var React = require("react");

var NavHeader = module.exports = React.createClass({
  render: function(){
    return (
      <div id="NavHeader">
        <div id="download">
          <a href="/download.html">下载客户端</a>
        </div>
        <div id="header">
          <LeftBar />
          <LogoNav />
          <RightBar />
        </div>
      </div>
    );
  }
});

var LeftBar = React.createClass({
  render: function(){
    return (
      <div id="leftBar">
        <form target="_blank">
          <input type="text" id="bdcsMain" placeholder="搜索豆田" />
        </form>
      </div>
    );
  }
});

var RightBar = React.createClass({
  render: function(){
    return (
      <div id="rightBar">
        <HomeNav />
        <SquareNav />
        <UserNav />
        <MsgNav />
      </div>
    );
  }
});

var HomeNav = React.createClass({
  render: function(){
    return (
      <div className="header_nav" id="homeNav">
        <a className="tab_anchor tooltipped" href="/" data-position="bottom" data-tooltip="首页" data-delay="50">
          <i className="fa fa-home fa-2x"></i>
        </a>
      </div>
    );
  }
});

var SquareNav = React.createClass({
  render: function(){
    return (
      <div className="header_nav" id="squareNav">
        <a className="tab_anchor tooltipped" href="/square" data-position="bottom" data-tooltip="广场" data-delay="50">
          <i className="fa fa-send fa-lg"></i>
        </a>
      </div>
    );
  }
});

var UserNav = React.createClass({
  render: function(){
    return (
      <div className="header_nav" id="userNav">
        <a className="tab_anchor tooltipped" href="#" data-position="bottom" data-tooltip="个人中心" data-delay="50">
          <i className="fa fa-user fa-2x"></i>
        </a>
      </div>
    );
  }
});

var MsgNav = React.createClass({
  render: function(){
    return (
      <div className="header_nav" id="msgNav">
        <a className="tab_anchor tooltipped" href="/user/message" data-position="bottom" data-tooltip="豆信" data-delay="50">
          <i className="fa fa-envelope fa-2x"></i>
          <div id="msg_count"></div>
        </a>
      </div>
    );
  }
});

var LogoNav = React.createClass({
  render: function(){
    return (
      <div id="logoNav">
        <a className="tab_anchor" href="/across">
          <img src="/static/img/logo_64.png" className="tooltipped" data-position="bottom" data-tooltip="穿越" data-delay="50" />
        </a>
      </div>
    );
  }
});

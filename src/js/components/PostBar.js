var React = require("react");

var PostBar = module.exports = React.createClass({
  render: function(){
    return (
      <div id="PostBar">
        <div id="PostFull">
          <a className="post_btn category text">
            <i className="fa fa-archive fa-2x"></i>
          </a>
          <div className="post_btn blog text">
            <i className="fa fa-font fa-2x"></i>
          </div>
          <div className="post_btn photo">
            <i className="fa fa-camera fa-2x"></i>
          </div>
        </div>
      </div>
    );
  }
});

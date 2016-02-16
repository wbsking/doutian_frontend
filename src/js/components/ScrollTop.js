var React = require("react");

var ScrollTop = module.exports = React.createClass({
  getInitialState: function(){
    return {isShow: "hide"}
  },
  render: function(){
    return (
      <div id="ScrollTop" className={this.state.isShow}>
        <i className="fa fa-angle-double-up fa-lg"></i>
      </div>
    );
  }
});

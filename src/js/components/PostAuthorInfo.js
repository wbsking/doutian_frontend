var React = require("react");

var PostAuthorInfo = module.exports = React.createClass({
  render: function(){
    return (
      <div className="authorInfo">
        <a className="avatar" href="">
          <img src="" />
        </a>
        <a className="authorName" href="">
        </a>
        <a className="createTime" href="">
        </a>
        <div className="share_div">
          <div className="share_alt" clicked="0">
            <i className="fa fa-share-alt fa-lg"></i>
          </div>
          <div className="share_list">
            <a href="" className="share_weibo" target="_blank"><i className="fa fa-weibo fa-lg"></i></a>
            <a href="" className="share_qq" target="_blank"><i className="fa fa-qq fa-lg"></i></a>
            <a className="share_weixin"><i className="fa fa-weixin fa-lg"></i></a>
            </div>
          </div>
      </div>
    );
  }
});

var React = require("react");
var PostAuthorInfo = require("PostAuthorInfo");

var BlogPost = module.exports = React.createClass({
  getInitialState: function(){
    return {};
  },
  render: function(){
    return (
      <div className="PostContent">
        <PostAuthorInfo />
        <div className="content">
          <div className="front">
            <div className="content_wrapper">
            <div className="blog_wrapper">
              <div className="title"></div>
              <div className="content"></div>
            </div>
            <div className="row_cate"><a className="" href=""></a></div>
            <div className="post_info">
              <div className="comment_info">
                <i className="fa fa-comments fa-lg"></i>
                <span className="comment_count"></span>
              </div>
              <div className="like_info">
                <span className="like_text"></span>
                <div className="like_icon" liked="1">
                  <i className="fa fa-heart fa-lg"></i>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="back qr_div"></div>
    </div>
      </div>
    );
  }
});

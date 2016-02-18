var React = require("react");

CreateBlogPop = module.exports = React.createClass({
  render: function(){
    return (
      <div id="CreateBlogPop">
        <div className="createPop">
          <div className="label">文字豆苗</div>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" id="BlogTitle" />
              <label htmlFor="BlogTitle">标题</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="BlogContent" className="materialize-textarea"></textarea>
              <label htmlFor="BlogContent">内容</label>
            </div>
          </div>
          <div className="row row_cate">
            <span className="cate_ele private_choiced" type="PRIVATE" default="1" choiced="1">默认豆地</span>
          </div>
          <div className="form_control">
            <div className="close_btn btn waves-effect waves-light">关闭</div>
            <div className="create_btn btn waves-effect waves-light">创建</div>
          </div>
        </div>
      </div>
    );
  }
});

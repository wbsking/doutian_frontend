var React = require("react");

var CreateCatePop = module.exports = React.createClass({
  render: function(){
    return (
      <div id="CreateCatePop">
        <div id="CreateCate" className="createPop">
          <div className="label">开辟豆地</div>
          <div className="cate_row row">
            <div className="input-field col s12">
              <input type="text" id="cateName" />
              <label htmlFor="cateName">豆地名称</label>
            </div>
          </div>
          <div className="cate_row row">
            <div className="input-field col s12">
              <textarea id="cateDesc" className="materialize-textarea"></textarea>
              <label htmlFor="cateDesc">豆地描述</label>
            </div>
          </div>
          <div className="cate_type">
            <div type="private" className="private private_choiced">私人的</div>
            <div type="public" className="public" choiced="0">公开的</div>
            <div id="allowDiv">
              <input type="checkbox" id="NotAllowEdit" />
              <label htmlFor="NotAllowEdit">不允许其他人上传内容</label>
            </div>
          </div>
          <div className="cate_type_desc">
            <span className="private_desc">私人的豆地只有你自己可以看到，你可以用来种植你独属的心情</span>
            <span className="public_desc">公开的豆地任何人都可以看，也可以上传他们的想法，大家可以一起维护一块豆地</span>
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

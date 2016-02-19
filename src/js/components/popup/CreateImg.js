var React = require("react");

var CreateImgPop = module.exports = React.createClass({
  render: function(){
    return (
      <div id="CreateImgPop">
        <div className="createPop">
          <div className="label">图片豆苗</div>
          <div className="img_preview">
            <img src />
          </div>
          <div className="upload_container">
            <form>
              <input type="file" id="img_upload" name="file" />
              <input type="hidden" name="type" value="meet_img" />
              <input type="hidden" id="meet_img_key" name="key" value="" />
              <input type="hidden" name="token" value="" />
            </form>
            <div className="upload_icon">
              <i className="fa fa-cloud-upload fa-3x"></i>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="img_desc" type="text" className="materialize-textarea"></textarea>
              <label htmlFor="img_desc">图片简介</label>
            </div>
          </div>
          <div className="row row_cate">
            <span className="cate_ele private_choiced" type="PRIVATE">默认豆地</span>
          </div>
          <div className="form_control">
            <div className="close_btn btn waves-effect waves-light">关闭</div>
            <div className="create_btn btn waves-effect waves-light">上传</div>
            <div className="img_uploading">
              <i className="fa fa-cog fa-spin fa-lg"></i>
              <span>上传中...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

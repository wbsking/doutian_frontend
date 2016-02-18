var AppDispatcher = require("../dispatcher");
var assign = require("object-assign");
var EventEmitter = require("events").EventEmitter;

var _userInfo = {}

var UserInfoStore = assign({}, EventEmitter.prototype, {
  getUser: function(){
    return _userInfo;
  },
  setUser: function(userInfo){
    _userInfo = userInfo;
  },
  delUser: function(){
    _userInfo = {};
  }
});

UserInfoStore.dispatchToken = AppDispatcher.register(function(payload){
  return true;
});

module.exports = UserInfoStore;

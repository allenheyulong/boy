if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../components/common/loading');
require('../../components/common/divider');
require('../../components/common/card');
require('../../components/uni-ui/uni-icon/uni-icon');
require('../../components/uni-ui/uni-badge/uni-badge');
require('../../components/uni-ui/uni-list-item/uni-list-item');
require('../../components/uni-ui/uni-status-bar/uni-status-bar');
require('../../pages/index/index');
require('../../pages/class/class');
require('../../pages/photo/photo');
require('../../pages/person/person');
require('../../pages/user-set/user-set');
require('../../pages/user-userinfo/user-userinfo');
require('../../pages/login/login');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}
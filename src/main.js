// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//样式初始化
import '../static/css/pc-reset.css';
import '../static/css/iconfont.css';
import '../static/css/notice.css';

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//弹出提醒
import notie from 'notie';
Vue.prototype.$notie = notie;
//引入axios请求
import axios from './axios/http';
Vue.prototype.$http = axios;
Vue.config.productionTip = false

//引入状态管理工具vuex
import store from './vuex/store.js';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/* eslint-disable no-unused-vars */
// css 重置样式
import 'normalize.css';
// less 全局样式
import '@/assets/less/global.less';

import Vue from 'vue';
import VantPlugin from '@/plugins/vant-plugin';
import DomFixPlugin from '@/plugins/dom-fix-plugin';

import App from './App.vue';
import router from './router';
import store from './store';

// 注册自定义的Vant插件
Vue.use(VantPlugin);
Vue.use(DomFixPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

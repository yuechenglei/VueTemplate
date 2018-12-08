// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
import App from './App';
import router from './router';
import store from './vuex/index' 

import 'font-awesome/css/font-awesome.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});

Vue.config.productionTip = false;

// make global
import utils from './commons/utils.js'
Vue.prototype.$utils = utils
import api from './api/index.js'
Vue.prototype.$api = api



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

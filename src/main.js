import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import 'es6-promise/auto';

import routes from './router/routes';
import store from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

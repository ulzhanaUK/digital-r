// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuikit from 'vuikit'
import VueBus from 'vue-bus';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueBus);

var moment = require('moment');
moment().format();

Vue.use(Vuikit)
export const bus = new Vue();
// register globally
const YmapPlugin =  require('vue-yandex-maps');
Vue.use(YmapPlugin)

// or for a single instance
const { yandexMap, ymapMarker } = require('vue-yandex-maps');
new Vue({
  components: { yandexMap, ymapMarker }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

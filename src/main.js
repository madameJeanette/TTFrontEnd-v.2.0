// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:8000/api/tarantulas'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

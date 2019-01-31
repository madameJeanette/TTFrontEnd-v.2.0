import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '../App.vue',
      component: App
    }
  ]
})

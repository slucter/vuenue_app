import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../public/assets/css/style.css'

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

import VueScrollReveal from 'vue-scroll-reveal'
Vue.use(VueScrollReveal)

Vue.use(VueToast)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

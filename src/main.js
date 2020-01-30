import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '../src/assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/font/iconfont.css'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

Axios.defaults.baseURL = ''

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 全局配置mixin混入
// import { mixin } from './mixin'
// Vue.mixin(mixin)
new Vue({
  el: '#app',
  render: h => h(App)
})

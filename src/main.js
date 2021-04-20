import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SweetModal from 'sweet-modal-vue/src/plugin.js'

Vue.use(SweetModal)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Bulma from 'bulma'
import 'bulma/css/bulma.css'

Vue.use(Bulma)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

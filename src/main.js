import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Bulma from 'bulma'
import 'bulma/css/bulma.css'
import Bulma_Extensions from 'bulma-extensions'
import 'bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css'

// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

// Font Awesome のメインファイルを import
import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'

// 使用するカテゴリーのファイルを import
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css'
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

// Vue.use(Buefy)
Vue.use(Bulma)
Vue.use(Bulma_Extensions)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

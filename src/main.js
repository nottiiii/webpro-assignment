import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Axios.defaults.headers.common.Accept = 'application/json'
Vue.$http = Axios

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

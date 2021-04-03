import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'
import axios from 'axios'

require('@/store/subscriber');

axios.defaults.baseURL = 'https://api44.aritecit.nl';

Vue.config.productionTip = false;

store.dispatch('attempt', VueCookies.get('token'));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

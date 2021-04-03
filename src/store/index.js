import Vue from 'vue'
import Vuex from 'vuex'
import Home from './modules/home'
import Login from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Home,
    Login
  }
})

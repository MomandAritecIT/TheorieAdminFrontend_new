import Vue from 'vue'
import Vuex from 'vuex'
import Code from './modules/code'
import Question from './modules/question'
import Auth from './modules/auth'
import Notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Code,
    Question,
    Auth,
    Notification
  },
})

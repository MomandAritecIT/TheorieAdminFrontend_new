import Vue from 'vue'
import Vuex from 'vuex'
import Question from './modules/question'
import Auth from './modules/auth'
import Notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Question,
    Auth,
    Notification
  },
})

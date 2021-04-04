import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Code from '../views/Code.vue'
import Question from '../views/Question.vue'
import AddQuestion from '../views/AddQuestion.vue'
import Login from '../views/Login.vue'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/code',
    name: 'Code',
    component: Code
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/add-question',
    name: 'AddQuestion',
    component: AddQuestion
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.getters['Auth/authenticated']) next({ name: 'Login' })
  else next()
})

export default router

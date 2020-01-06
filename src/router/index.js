import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Profile from '../views/Profile.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/successauth',
    name: 'successauth',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

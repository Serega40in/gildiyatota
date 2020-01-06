import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Profile from '../views/Profile.vue'
import ArticlePage from "../components/ArticlePage";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/article/:id',
    name: 'article',
    props: true,
    component: ArticlePage
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
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

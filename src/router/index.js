import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Profile from '../views/Profile.vue'
import ArticlePage from "../components/ArticlePage"
import AddArticle from "../components/AddArticle"
import Articles from "../components/Articles"
import News from '../views/News'
import Meditations from '../views/Meditations'
import Activity from '../views/Activity'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles
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
    path: '/addarticle',
    name: 'addarticle',
    component: AddArticle
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/meditations',
    name: 'meditations',
    component: Meditations
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

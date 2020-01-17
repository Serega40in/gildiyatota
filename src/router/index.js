import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../views/Home.vue'*/
import Signin from '../views/Signin.vue'
import Profile from '../views/Profile.vue'
import ArticlePage from "../components/ArticlePage"
import AddArticle from "../components/AddArticle"
import Articles from "../components/Articles"
import Users from "../views/Users"
import News from '../views/News'
import Video from '../views/Video'
import Meditations from '../views/Meditations'
import Activity from '../views/Activity'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'news',
    component: News
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles
  },
  {
    path: '/users',
    name: 'users',
    component: Users
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
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

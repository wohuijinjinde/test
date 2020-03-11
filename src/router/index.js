import Vue from 'vue'
import VueRouter from 'vue-router'


import index from '../views/index'
import NewsPage from '../views/NewsPage'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/news',
    name: 'NewsPage',
    component: NewsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

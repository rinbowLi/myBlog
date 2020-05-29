import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

//重写push
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import( /* webpackChunkName: "about" */ '../views/article/Article.vue')
  },
  {
    path: '/catalog/:catalog',
    name: 'Catalog',
    component: () => import( /* webpackChunkName: "about" */ '../views/catalog/Catalog.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import( /* webpackChunkName: "about" */ '../views/search/Search.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import( /* webpackChunkName: "about" */ '../views/timeline/Timeline.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/about/About.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import( /* webpackChunkName: "about" */ '../views/message/Message.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局路由守卫，跳转新页面时滚动条回到顶部
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 重写push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
  meta: {
    needLogin: false,
    title: 'rinbowli的博客'
  }
},
{
  path: '/article/:id',
  name: 'Article',
  component: () => import(/* webpackChunkName: "article" */ '../views/article/Article.vue'),
  meta: {
    needLogin: false,
    title: ''
  }
},
{
  path: '/catalog/:catalog',
  name: 'Catalog',
  component: () => import(/* webpackChunkName: "catalog" */ '../views/catalog/Catalog.vue'),
  meta: {
    needLogin: false,
    title: '分类页'
  }
},
{
  path: '/search',
  name: 'Search',
  component: () => import(/* webpackChunkName: "search" */ '../views/search/Search.vue'),
  meta: {
    needLogin: false,
    title: '搜索页'
  }
},
{
  path: '/timeline',
  name: 'Timeline',
  component: () => import(/* webpackChunkName: "timeline" */ '../views/timeline/Timeline.vue'),
  meta: {
    needLogin: false,
    title: '我的时光轴'
  }
},
{
  path: '/about',
  name: 'About',
  component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
  meta: {
    needLogin: false,
    title: '关于作者'
  }
},
{
  path: '/message',
  name: 'Message',
  component: () => import(/* webpackChunkName: "message" */ '../views/message/Message.vue'),
  meta: {
    needLogin: false,
    title: '留言板'
  }
},
{
  path: '/link',
  name: 'Link',
  component: () => import(/* webpackChunkName: "link" */ '../views/link/Link.vue'),
  meta: {
    needLogin: false,
    title: '友链'
  }
},
{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
  meta: {
    needLogin: false
  }
},
{
  path: '/admin',
  name: 'Admin',
  redirect: '/admin/articleManagement',
  component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
  meta: {
    needLogin: true
  },
  children: [{
    path: 'articleManagement',
    name: 'ArticleManagement',
    component: () => import(/* webpackChunkName: "articleManagement" */ '../views/admin/articleManagement/ArticleManagement.vue'),
    meta: {
      needLogin: true
    }
  },
  {
    path: 'commentManagment',
    name: 'CommentManagment',
    component: () => import(/* webpackChunkName: "commentManagment" */ '../views/admin/commentManagment/CommentManagment.vue'),
    meta: {
      needLogin: true
    }
  },
  {
    path: 'messageManagment',
    name: 'MessageManagment',
    component: () => import(/* webpackChunkName: "messageManagment" */ '../views/admin/messageManagment/MessageManagment.vue'),
    meta: {
      needLogin: true
    }
  },
  {
    path: 'timelineManagment',
    name: 'TimelineManagment',
    component: () => import(/* webpackChunkName: "timelineManagment" */ '../views/admin/timelineManagment/TimelineManagment.vue'),
    meta: {
      needLogin: true
    }
  },
  {
    path: 'linkManagment',
    name: 'LinkManagment',
    component: () => import(/* webpackChunkName: "linkManagment" */ '../views/admin/linkManagment/LinkManagment.vue'),
    meta: {
      needLogin: true
    }
  }
  ]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import {
  getToken
} from '../utils/auth'

Vue.use(VueRouter)

//重写push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      needLogin: false
    }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import( /* webpackChunkName: "about" */ '../views/article/Article.vue'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/catalog/:catalog',
    name: 'Catalog',
    component: () => import( /* webpackChunkName: "about" */ '../views/catalog/Catalog.vue'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import( /* webpackChunkName: "about" */ '../views/search/Search.vue'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import( /* webpackChunkName: "about" */ '../views/timeline/Timeline.vue'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/about/About.vue'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import( /* webpackChunkName: "about" */ '../views/message/Message.vue'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import( /* webpackChunkName: "about" */ '../views/link/Link.vue'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login/Login.vue'),
    meta: {
      needLogin: false
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: "/admin/articleManagement",
    component: () => import( /* webpackChunkName: "about" */ '../views/admin/Admin.vue'),
    meta: {
      needLogin: true
    },
    children: [{
        path: 'articleManagement',
        name: 'ArticleManagement',
        component: () => import( /* webpackChunkName: "about" */ '../views/admin/articleManagement/ArticleManagement.vue'),
        meta: {
          needLogin: true
        }
      },
      {
        path: 'commentManagment',
        name: 'CommentManagment',
        component: () => import( /* webpackChunkName: "about" */ '../views/admin/commentManagment/CommentManagment.vue'),
        meta: {
          needLogin: true
        }
      },
      {
        path: 'messageManagment',
        name: 'MessageManagment',
        component: () => import( /* webpackChunkName: "about" */ '../views/admin/messageManagment/MessageManagment.vue'),
        meta: {
          needLogin: true
        }
      },
      {
        path: 'timelineManagment',
        name: 'TimelineManagment',
        component: () => import( /* webpackChunkName: "about" */ '../views/admin/timelineManagment/TimelineManagment.vue'),
        meta: {
          needLogin: true
        }
      },
      {
        path: 'linkManagment',
        name: 'LinkManagment',
        component: () => import( /* webpackChunkName: "about" */ '../views/admin/linkManagment/LinkManagment.vue'),
        meta: {
          needLogin: true
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局路由守卫，跳转新页面时滚动条回到顶部
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let token = getToken();
  if (to.meta.needLogin && !token) {
    next("/login" + "?redirect=" + from.fullPath)
  } else {
    next()
  }
})

export default router

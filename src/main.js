import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Pagination,
  Form,
  FormItem,
  Input,
  Tooltip,
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Col,
  Table,
  TableColumn,
  Dialog,
  Switch,
  Upload
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {
  clipboard
} from "./utils/utils"

import {
  getToken
} from '@/utils/auth'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/style.min.css' // global css
import '@/styles/animate.min.css' // animate css
import hljs from 'highlight.js';
import VueLazyLoad from 'vue-lazyload'
import 'highlight.js/styles/atom-one-dark.css' //样式文件

//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


NProgress.configure({
  easing: 'ease', // 动画方式    
  speed: 500, // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

//全局路由守卫，跳转新页面时滚动条回到顶部
router.beforeEach((to, from, next) => {

  // 每次切换页面时，调用进度条
  NProgress.start();

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  let token = getToken();
  if (to.meta.needLogin && !token) {
    next("/login" + "?redirect=" + from.fullPath)
  } else {
    next()
  }
})


router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})


Vue.directive('highlight', function (el) {
  let pres = el.querySelectorAll('pre');
  pres.forEach((pre) => {
    pre.setAttribute("class", "highlight-wrap");
  })
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block, index) => {
    hljs.highlightBlock(block)
    block.setAttribute("id", "hljs-" + index);
    block.setAttribute("data-lang", "Code");
    let dom = document.createElement('a');
    //添加一个这样的元素便于赋值代码 '<a class="copy-code" href="javascript:" data-clipboard-target="#hljs-' + index + '" title="拷贝代码"><i class="iconfont icon-fuzhi"></i></a>'
    dom.className = 'copy-code';
    dom.setAttribute("href", "javascript:");
    dom.setAttribute("title", "拷贝代码");
    dom.setAttribute("data-clipboard-target", "#hljs-" + index);
    dom.innerHTML = '<i class="iconfont icon-fuzhi"></i>';
    block.appendChild(dom);

    //hljs.initLineNumbersOnLoad()
  })
})


//初始化复制代码
clipboard()

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  // error:'./static/error.png',
  loading: require("./assets/loading.svg"),
  attempt: 1
})
Vue.use(Pagination);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Tooltip);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Switch);
Vue.use(Upload);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue(); //eventBus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

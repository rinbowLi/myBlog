import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Pagination
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {
  clipboard
} from "./utils/utils"

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/style.min.css' // global css
import '@/styles/animate.min.css' // animate css
import hljs from 'highlight.js';
import VueLazyLoad from 'vue-lazyload'
import 'highlight.js/styles/atom-one-dark.css' //样式文件

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

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue(); //eventBus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

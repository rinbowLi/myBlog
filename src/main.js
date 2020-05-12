import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/style.min.css' // global css
import '@/styles/animate.min.css' // animate css
import hljs from 'highlight.js';
import VueLazyLoad from 'vue-lazyload'
import 'highlight.js/styles/atom-one-dark.css' //样式文件

Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    setTimeout(() =>{
        blocks.forEach((block)=>{
        hljs.highlightBlock(block)
        })
    }, 200)
})

Vue.use(VueLazyLoad,{
    preLoad: 1.3,
    // error:'./static/error.png',
    loading:require("./assets/loading.svg"),
    attempt: 1
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue(); //eventBus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

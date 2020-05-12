<template>
  <div
    id="nav-menu"
    role="navigation"
    class="headroom headroom--not-bottom headroom--pinned headroom--top"
    v-show="isShow"
  >
    <div id="nav-left">
      <a href="/">
        <img
          id="site-avatar"
          v-lazy="'https://www.rinbowli.cn/usr/uploads/images/touxiang.jpg'"
          style="height: 35px; width: 35px; margin: 14.5px 5px 0px 0px;"
        />
        {{siteName}}
      </a>
    </div>
    <div id="nav-right">
      <ul class="nav-right-list">
        <li class="nav-right-item" v-for="item in navList" :key="item.icon">
          <a :href="item.link">
            <i class="iconfont" :class="item.icon"></i>
            {{item.title}}
          </a>
        </li>
      </ul>
      <div id="nav-btns">
        <i class="iconfont icon-sousuo" id="nav-search-btn"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      isShow: true,
      siteName: "rinbowli",
      navList: [
        {
          title: "首页",
          link: "/",
          icon: "icon-shouye"
        },
        {
          title: "HTML",
          link: "/index.php/category/html/",
          icon: "icon-html1"
        },
        {
          title: "Javascript",
          link: "/index.php/category/js/",
          icon: "icon-js"
        },
        {
          title: "Vue",
          link: "/index.php/category/vue/",
          icon: "icon-vue"
        },
        {
          title: "CSS",
          link: "/index.php/category/css/",
          icon: "icon-css"
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let vh = window.innerHeight;
      if (window.scrollY > vh) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#nav-menu {
  position: fixed;
  top: 0;
  z-index: 110;
  transition: all 0.5s ease;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 64px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06),
    0 4px 5px 0 rgba(0, 0, 0, 0.06), 0 1px 10px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  a {
    font-size: 20px;
    display: inline-block;
    transition: all 0.24s ease;
    color: #333;
    text-decoration: none;
  }
  a:active,
  a:hover {
    color: grey !important;
  }
  #nav-left a {
    font-family: initial;
    margin-left: 10px;
    position: relative;
    line-height: 64px;
    #site-avatar {
      height: 35px;
      width: 35px;
      margin: 14.5px 5px 0 0;
      float: left;
      border-radius: 50%;
      transition: all 0.5s;
      box-shadow: 0 0 6px 0.5px rgba(255, 255, 255, 0.7);
    }
  }
  #nav-right {
    a {
      font-size: 20px;
      font-family: initial;
      display: inline-block;
      transition: all 0.24s ease;
      color: #333;
      text-decoration: none;
      line-height: 64px;
      margin: 0 5px;
    }
    i {
      font-size: 20px;
      height: 64px;
      line-height: 64px;
      margin: 0 3px;
    }
    ul {
      list-style: none;
      display: inline-block;
      margin: 0;
      padding: 0;
      .nav-right-item {
        display: inline-block;
        position: relative;
      }
    }
  }
}
</style>

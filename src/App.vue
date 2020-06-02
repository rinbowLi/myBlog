<template>
  <div id="app">
    <!-- 头部背景图片 -->
    <Header :siteData="siteData" v-if="show" />
    <!-- 首页头部导航 -->
    <Nav @showSearchBox="showSearchBox" v-show="ShowNavAndHeader" />
    <keep-alive exclude="Article">
      <router-view v-if="routerAlive" />
    </keep-alive>
    <Footer v-show="ShowNavAndHeader" />
    <backTop v-show="ShowNavAndHeader" />
    <searchBox ref="searchBox" />
    <div class="waifu">
      <div class="waifu-tips"></div>
      <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
      <div class="waifu-tool">
        <span class="fui-home"></span>
        <span class="fui-chat"></span>
        <span class="fui-eye"></span>
        <span class="fui-user"></span>
        <span class="fui-photo"></span>
        <span class="fui-info-circle"></span>
        <span class="fui-cross"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/content/footer";
import Header from "./components/content/Header";
import Nav from "./components/content/Nav";
import backTop from "./components/content/backTop";
import searchBox from "./components/content/searchBox";
export default {
  components: {
    Footer,
    Header,
    Nav,
    backTop,
    searchBox
  },
  computed: {
    siteData() {
      if (this.$route.name === "Article") {
        return {
          siteName: "rinbowli",
          siteDescription: "95后前端开发攻城狮,欢迎来到我的博客。",
          url: require("./assets/bg4.jpg"),
          show: false
        };
      } else {
        return {
          siteName: "rinbowli",
          siteDescription: "95后前端开发攻城狮,欢迎来到我的博客。",
          url: require("./assets/bg1.jpg"),
          show: true
        };
      }
    },
    show() {
      let notShow = [
        "/timeline",
        "/about",
        "/message",
        "/link",
        "/login",
        "/admin"
      ];
      return !notShow.includes(this.$route.path);
    },
    ShowNavAndHeader(){
        let notShow = [
        "/login",
        "/admin"
      ];
      return !notShow.includes(this.$route.path);
    }
  },
  data() {
    return {
      routerAlive: true
    };
  },
  provide() {
    return {
      routerRefresh: this.routerRefresh
    };
  },
  methods: {
    routerRefresh() {
      this.routerAlive = false;
      this.$nextTick(() => {
        this.routerAlive = true;
      });
    },
    showSearchBox() {
      this.$refs.searchBox.toggle(true);
    }
  }
};
</script>

<style lang="scss">
</style>

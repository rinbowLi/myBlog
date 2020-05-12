<template>
  <div id="app">
    <!-- 头部背景图片 -->
    <Header :siteData="siteData" />
    <!-- 首页头部导航 -->
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/common/footer";
import Header from "./components/common/Header";
import Nav from "./components/common/Nav";
export default {
  components: {
    Footer,
    Header,
    Nav
  },
  computed: {
    siteData() {
      if (this.$route.name === "Article") {
        return {
          siteName: "rinbowli",
          siteDescription: "95后前端开发攻城狮,欢迎来到我的博客。",
          url: require("./assets/bg4.jpg"),
          show:false
        };
      } else {
        return {
          siteName: "rinbowli",
          siteDescription: "95后前端开发攻城狮,欢迎来到我的博客。",
          url: require("./assets/bg1.jpg"),
          show:true
        };
      }
    }
  }
};
</script>

<style lang="scss">
</style>

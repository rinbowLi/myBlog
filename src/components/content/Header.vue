<template>
  <header id="header" :style="{height:siteData.show?'100vh':'80vh'}">
    <Bubble />
    <div id="site-meta" v-show="siteData.show">
      <h1 id="site-name">{{siteData.siteName}}</h1>
      <h2 id="site-description">{{siteData.siteDescription}}</h2>
    </div>
    <div id="bg-img" :style="{backgroundImage:'url('+siteData.url+')'}"></div>
  </header>
</template>

<script>
//import Colck from '../common/clockCanvas'
import Bubble from "../common/BubbleCanvas";
//import Polaris from '../common/PolarisCanvas'
export default {
  components: {
    //Colck,
    Bubble
    //Polaris
  },
  props: {
    siteData: {
      type: Object,
      default() {
        return {
          siteName: "rinbowli",
          siteDescription: "95后前端开发攻城狮,欢迎来到我的博客。",
          url: require("../../assets/bg1.jpg"),
          show: true
        };
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#header {
  //height: 100vh;
  #site-meta {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    text-align: center;
    border-radius: 0.5rem;
    width: 100%;
    padding: 30px 10px;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    #site-name {
      font-weight: 300;
      margin-top: 5px;
      margin-bottom: 7px;
      font-size: 5rem;
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 0 0 5px #c3c3c3;
    }
    #site-description {
      font-weight: 300;
      margin-top: 5px;
      margin-bottom: 7px;
      color: rgba(255, 255, 255, 0.8);
      text-shadow: 0 0 5px #c3c3c3;
    }
  }
  #bg-img {
    width: 100%;
    height: 100%;
    // background: url("../../assets/bg1.jpg") center center no-repeat;
    background-repeat: no-repeat;
    background-position: center;
    // style="{backgroundImage: 'url('+item.bgImg+')',backgroundRepeat:'no-repeat',backgroundSize:'100%',backgroundPosition:'center'}"
    position: relative;
    z-index: -1;
    background-size: cover;
  }
}
</style>
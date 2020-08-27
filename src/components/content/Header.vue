<template>
  <header id="header" :style="{height:siteData.show?'100vh':'80vh'}">
    <Bubble />
    <div id="site-meta" v-show="siteData.show">
      <h1 id="site-name">{{siteData.siteName}}</h1>
      <h2 id="site-description">{{siteData.siteDescription}}</h2>
    </div>
    <div id="bg-img" :style="{backgroundImage:'url('+siteData.url+')'}"></div>
    <video
      id="bg-video"
      class="video_bg"
      src="https://business.xiongmaoboshi.com/test/video/timo-1597888220931-922.mp4"
      loop="loop"
      autoplay="autoplay"
      muted="muted"
      :poster="siteData.url"
      x-webkit-airplay="allow"
      x5-video-orientation="portraint"
      webkit-playsinline="true"
      playsinline="playsinline"
      x5-playsinline="true"
      x5-video-player-fullscreen="true"
      style="opacity: 1;"
    ></video>
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
    z-index: -2;
    background-size: cover;
  }
  #bg-video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: fill;
    opacity: 0;
    transition: all 0.3s;
  }
}
</style>
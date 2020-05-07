<template>
  <div id="app">
        <!-- 头部背景图片 -->
    <Header />
       <!-- 首页头部导航 -->
    <Nav />
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/common/footer'
import Header from './components/common/Header'
import Nav from './components/common/Nav'
export default {
  components:{
    Footer,
    Header,
    Nav
  }
  
}
</script>

<style lang="scss">

</style>

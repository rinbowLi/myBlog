<template>
  <div id="search-box" v-show="isShow">
    <span class="close" @click="toggle(false)">
      <i class="iconfont icon-guanbi"></i>
    </span>
    <input type="text" name="s" id="search-text" placeholder="想要看什么？" />
    <button type="submit" id="search-button">
      <i class="iconfont icon-sousuo"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "searchBox",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    toggle(flag) {
      this.isShow = flag;
    }
  }
};
</script>

<style lang="scss" scoped>
#search-box {
  background: rgb(255, 255, 255);
  display: flex;
  left: 0;
  top: 0;
  #search-button {
    background-color: #fff;
    margin-left: 5px;
    i {
      font-size: 80px;
    }
  }
}
</style>
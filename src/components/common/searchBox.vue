<template>
  <div id="search-box" v-show="isShow">
    <span class="close" @click="toggle(false)">
      <i class="iconfont icon-guanbi"></i>
    </span>
    <input type="text" name="s" id="search-text" placeholder="想要看什么？" v-model="keyword" />
    <button type="submit" id="search-button" @click="search">
      <i class="iconfont icon-sousuo"></i>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Message } from "element-ui";
export default {
  name: "searchBox",
  inject: ["routerRefresh"], //在子组件中注入在父组件中创建的属性
  data() {
    return {
      isShow: false,
      keyword: ""
    };
  },
  methods: {
    ...mapMutations(["setKeyword"]),
    toggle(flag) {
      this.isShow = flag;
    },
    search() {
      if (!this.keyword) {
        Message({
          message: "请先填写搜索关键字哦~",
          type: "warning"
        });
        return;
      }
      this.setKeyword(this.keyword);
      this.$router.push("/search");
      this.routerRefresh(); //调用app.vue里面的routerRefresh()方法，完成摧毁和重建过程
      this.isShow = false;
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
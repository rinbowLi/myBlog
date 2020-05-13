<template>
  <div class="catalog">
    <Article />
  </div>
</template>

<script>
import Article from "./components/articleList";

export default {
  name: "Catalog",
  
  components: {
    Article
  },
    mounted(){
  },
  created() {
    let catalog = this.$route.params.catalog;
    this.curCatalog = catalog;
  },
  data() {
    return {
       paramsData:this.$route.params.catalog,
    };
  },
  methods:{
    //跳转页面
    linkToCurPage(paramsData){
      this.$router.push({
        path:"/page",
        params:{
          paramsName:this.paramsData
        }});
      this.routerRefresh();//调用app.vue里面的routerRefresh()方法，完成摧毁和重建过程
      }
  }
};
</script>

<style lang="scss" scoped>
</style>
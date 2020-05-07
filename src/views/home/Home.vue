<template commit>
  <div class="home" ref="home">
    <Article />
  </div>
</template>

<script>
import Article from "./components/articleList";
export default {
  name: "Home",
  components: {
    Article
  }
};
</script>

<style lang="scss" scoped>
</style>

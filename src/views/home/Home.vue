<template commit>
  <div class="home" ref="home">
    <Article />
  </div>
</template>

<script>
import Article from "./components/articleList";
import { login } from "../../network/home";
export default {
  name: "Home",
  components: {
    Article
  },
  created() {
    this.userLogin();
  },
  methods: {
    userLogin() {
      login({
        username: "admin",
        password: "123456"
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div id="body" class="animated fadeIn">
    <div class="container">
      <div class="row">
        <div id="main" class="col-mb-12 col-8 col-offset-2">
          <article class="post" itemscope itemtype="http://schema.org/BlogPosting">
            <!-- 文章主体部分 -->
            <ArticleContent />
            <!-- 打赏区域 -->
            <Reward />

            <div class="post-footer nextprev">
              <div
                class="post-footer-box half previous"
                v-if="Object.keys(prev).length>0"
                @click="linkToCurPage(prev._id)"
              >
                <a>
                  <div class="post-footer-thumbnail">
                    <img :src="require('@/assets/bg4.jpg')" />
                  </div>
                  <span class="post-footer-label">Previous Post</span>
                  <div class="post-footer-title">
                    <h3>{{prev.title}}</h3>
                  </div>
                </a>
              </div>
              <div
                class="post-footer-box half next"
                v-if="Object.keys(next).length>0"
                @click="linkToCurPage(next._id)"
              >
                <a>
                  <div class="post-footer-thumbnail">
                    <img :src="require('@/assets/bg4.jpg')" />
                  </div>
                  <span class="post-footer-label">Next Post</span>
                  <div class="post-footer-title">
                    <h3>{{next.title}}</h3>
                  </div>
                </a>
              </div>
            </div>
          </article>

          <Comments />
        </div>
        <!-- end #main-->
      </div>
      <!-- end .row -->
    </div>
    <!-- end .container -->
  </div>
</template>

<script>
import Reward from "./components/Reward";
import ArticleContent from "./components/ArticleContent";
import Comments from "./components/Comments";

import { selectNextAndPrevArticle } from "@/network/article";

export default {
  name: "Article",
  inject: ["routerRefresh"], //在子组件中注入在父组件中创建的属性
  components: {
    Reward,
    ArticleContent,
    Comments
  },
  data() {
    return {
      articleSortId: "",
      next: {},
      prev: {}
    };
  },
  mounted() {
    this.$bus.$on("articleSortId", data => {
      this.articleSortId = data;
      this.selectNextAndPrevArticleByID(data);
    });
  },
  methods: {
    selectNextAndPrevArticleByID(id) {
      selectNextAndPrevArticle({ id })
        .then(res => {
          console.log(res);
          this.next = res.data.next[0];
          this.prev = res.data.prev[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    //跳转页面
    linkToCurPage(paramsData) {
      this.$router.push({
        name: "Article",
        params: {
          id: paramsData
        }
      });
      this.routerRefresh(); //调用app.vue里面的routerRefresh()方法，完成摧毁和重建过程
    }
  }
};
</script>

<style lang="scss" scoped>
#site-meta {
  display: none;
}
.nextprev {
  cursor: pointer;
  .post-footer-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
}
</style>
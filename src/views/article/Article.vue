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
              <div class="post-footer-box half previous">
                <a href="https://www.rinbowli.cn/index.php/archives/10/" rel="prev">
                  <div class="post-footer-thumbnail">
                    <img v-lazy="'https://www.rinbowli.cn/usr/uploads/images/bg4.jpg'" />
                  </div>
                  <span class="post-footer-label">Previous Post</span>
                  <div class="post-footer-title">
                    <h3>vue中provide/inject的使用</h3>
                  </div>
                </a>
              </div>
              <div class="post-footer-box half next">
                <a href="https://www.rinbowli.cn/index.php/archives/19/" rel="next">
                  <div class="post-footer-thumbnail">
                    <img v-lazy="'https://www.rinbowli.cn/usr/uploads/images/bg4.jpg'" />
                  </div>
                  <span class="post-footer-label">Next Post</span>
                  <div class="post-footer-title">
                    <h3>盘点JavaScript中的一些骚操作~</h3>
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

export default {
  name: "Article",
  components: {
    Reward,
    ArticleContent,
    Comments
  },
  data() {
    return {
      allowComment: true,
      commentCount: 0,
      content: "",
      name: "",
      relatedArticleId: "",
      parent: 0,
      commentsList: []
    };
  }
};
</script>

<style lang="scss" scoped>
#site-meta {
  display: none;
}
</style>
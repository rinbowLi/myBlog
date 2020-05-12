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

          <div id="comments">
            <span id="response">
              <p>
                <i class="iconfont icon-comment"></i>
                {{commentCount}} 条评论
              </p>
            </span>

            <div id="respond-post-12" class="respond">
              <div class="cancel-comment-reply">
                <a
                  id="cancel-comment-reply-link"
                  href="https://www.rinbowli.cn/index.php/archives/12/#respond-post-12"
                  rel="nofollow"
                  style="display:none"
                  onclick="return TypechoComment.cancelReply();"
                >
                  <i class="iconfont icon-aria-cancel"></i>
                </a>
              </div>

              <span id="new-response">
                <i class="iconfont icon-aria-write"></i> 添加新评论
              </span>
              <!-- New Comments begin -->
              <form
                method="post"
                action="https://www.rinbowli.cn/index.php/archives/12/comment"
                id="comment-form"
                role="form"
              >
                <div id="comment-info">
                  <p>
                    <img
                      id="comment-avatar"
                      v-lazy="'https://www.rinbowli.cn/usr/uploads/images/touxiang.jpg'"
                    />
                  </p>
                  <p class="comment-input" style="width: 90%;">
                    <label for="author" class="required">
                      <i class="iconfont icon-yonghu"></i>
                    </label>
                    <input
                      placeholder="（必填）昵称"
                      type="text"
                      name="author"
                      id="author"
                      class="text"
                      value
                      required
                    />
                  </p>
                </div>
                <p>
                  <label for="textarea" class="required"></label>
                  <textarea
                    rows="8"
                    cols="50"
                    name="text"
                    id="textarea"
                    class="textarea"
                    placeholder="既然来了，那就留下点什么吧O(∩_∩)O"
                    required
                  ></textarea>
                </p>
                <div id="comment-footer">
                  <div class="OwO"></div>
                  <!--end .OwO-->
                </div>
                <center>
                  <button type="submit" class="submit">
                    <i class="iconfont icon-wodefashe"></i> 发射
                  </button>
                </center>
              </form>
            </div>
          </div>
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


export default {
  name: "Article",
  components: {
    Reward,
    ArticleContent
  },
  mounted() {


    this.$bus.$on("commentCount", data => {
      this.commentCount = data;
    });
  },
  data() {
    return {
      commentCount: 0
    };
  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>
#site-meta {
  display: none;
}
</style>
<template>
  <div>
    <div class="post-header">
      <h3 class="post-title">
        <a href="#" class="post-link">{{article.title}}</a>
      </h3>
      <div class="post-meta">
        <span class="post-meta-label post-meta-views">{{article.viewsCount}}次阅读</span>
        <span class="post-meta-label post-meta-cate">
          <router-link :to="'/catalog/'+article.catalog">{{article.catalog}}</router-link>
        </span>
        <span class="post-meta-label post-meta-date">{{article.time}}</span>
      </div>
    </div>
    <div class="post-body">
      <div class="post-content" v-highlight v-html="article.content"></div>
      <div class="post-other"></div>
      <div class="post-update">
        <i class="iconfont icon-shijian"></i>
        &nbsp;最后一次更新于{{article.updateTime}}
      </div>
    </div>
    <div class="post-tags">
      <a>{{article.tags}}</a>
      <a class="post-zan">
        <i class="iconfont icon-aixin"></i>
      </a>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import { selectArticleById } from "@/network/article";
import { getFormatDate } from "@/utils/utils";

export default {
  data() {
    return {
      article: {}
    };
  },
  created() {
    let id = this.$route.params.id;
    this.getArticle({ id });
  },
  methods: {
    getArticle(id) {
      selectArticleById(id)
        .then(res => {
          this.article = res.data;
          document.title = res.data.title;
          //格式化markdown格式文本
          this.article.content = marked(this.article.content);
          //格式化时间
          this.article.time = getFormatDate(this.article.time);
          this.article.updateTime = getFormatDate(this.article.time);
          this.$bus.$emit("commentCount", this.article.commentCount);
          this.$bus.$emit("allowComment", this.article.allowComment === 1);
          this.$bus.$emit("articleId", this.article._id);
          this.$bus.$emit("articleSortId", this.article.id);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
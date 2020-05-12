<template>
  <div id="body" class="animated fadeIn">
    <div class="container">
      <div class="row">
        <div id="main" class="col-mb-12 col-8 col-offset-2">
          <article
            itemscope
            itemtype="http://schema.org/BlogPosting"
            class="card wow fadeIn animated"
            data-wow-duration="1s"
            data-wow-offset="10"
            style="visibility: visible; animation-duration: 1s; animation-name: fadeIn;"
            v-for="item in articleList"
            :key="item._id"
          >
            <div class="card-title">
              <router-link :to="'/article/'+item._id">{{item.title}}</router-link>
            </div>
            <div class="card-meta-top">
              <span class="card-meta-cate">
                <i class="iconfont icon-biaoqian1"></i>
                <a href="#">{{item.catalog}}</a>
              </span>
              <span class="card-meta-date">
                <i class="iconfont icon-shijian"></i>
                {{item.time}}
              </span>
            </div>
            <router-link :to="'/article/'+item._id">
              <div
                class="card-thumbnail lazyload"
                :data-original="bgImg"
                :style="{backgroundImage: 'url('+bgImg+')',backgroundRepeat:'no-repeat',backgroundSize:'100%',backgroundPosition:'center'}"
              ></div>
            </router-link>
            <div class="card-body">{{item.content}}</div>
            <div class="card-line"></div>
            <ul class="card-meta-bottom">
              <li class="card-meta-label card-meta-more">
                <router-link title="Read More" :to="'/article/'+item._id">
                  <i class="iconfont icon-gengduo"></i>
                </router-link>
              </li>
              <li class="card-meta-label card-meta-views card-meta-right">
                <i class="iconfont icon-liulan"></i>
                {{item.viewsCount}}
              </li>
              <li class="card-meta-label card-meta-comments card-meta-right">
                <i class="iconfont icon-comment"></i>
                {{item.commentCount}}
              </li>
              <!--li class="card-meta-label card-meta-likes"></li-->
            </ul>
          </article>

          <div id="page-nav">
            <ul>
              <li class="page-current">
                <a href="https://www.rinbowli.cn/index.php/page/1/">1</a>
              </li>
              <li>
                <a href="https://www.rinbowli.cn/index.php/page/2/">2</a>
              </li>
              <li class="next">
                <a href="https://www.rinbowli.cn/index.php/page/2/">&gt;</a>
              </li>
            </ul>
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
import { selectArticleByPage } from "@/network/home";
import { getFormatDate, cutString } from "@/utils/utils";
export default {
  data() {
    return {
      articleList: [],
      bgImg: "https://www.rinbowli.cn/usr/uploads/images/bg4.jpg"
    };
  },
  created() {
    this.selectArticle();
  },
  methods: {
    selectArticle(page = 1, pageSize = 10) {
      let data = {
        pageSize,
        page
      };
      selectArticleByPage(data)
        .then(res => {
          this.articleList = res.data;
          this.articleList.map(v => {
            v.time = getFormatDate(v.time);
            v.content = cutString(v.content,90);
          });
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
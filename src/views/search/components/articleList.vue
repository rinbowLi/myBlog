<template>
  <div id="body" class="animated fadeIn">
    <div class="container">
      <div class="row">
        <div id="main" class="col-mb-12 col-8 col-offset-2">
          <div class="title">
            包含关键字 {{$store.state.keyword}} 的文章
            <br />
          </div>
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
                <span class="link" @click="linkToCurPage(item.catalog)">{{item.catalog}}</span>
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

          <div id="page-nav" v-show="showPagination">
            <el-pagination
              :current-page="curPage"
              background
              :page-size="pageSize"
              layout="prev, pager, next,jumper"
              :total="articleCount"
              @current-change="handleCurrentChange"
              @prev-click="pageTo(curPage-1)"
              @next-click="pageTo(curPage+1)"
            ></el-pagination>
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
import { selectArticleBykeyword } from "@/network/search";
import { getArticleCount } from "@/network/home";
import { getFormatDate, cutString } from "@/utils/utils";

export default {
  inject: ["routerRefresh"], //在子组件中注入在父组件中创建的属性
  data() {
    return {
      articleList: [],
      curCatalog: "",
      articleCount: 0,
      curPage: 1,
      pageSize: 8,
      bgImg: require("@/assets/bg4.jpg")
    };
  },
  created() {
    this.getArticle(this.$store.state.keyword);
  },
  computed: {
    showPagination() {
      return (
        Math.ceil(this.articleCount / this.pageSize) >= 2 || this.curPage != 1
      );
    }
  },
  methods: {
    //按照分类分页查询文章
    getArticle(keyword) {
      selectArticleBykeyword({ keyword })
        .then(res => {
          this.articleList = res.data;
          this.articleCount = res.data.length;
          this.articleList.map(v => {
            v.time = getFormatDate(v.time);
            v.content = cutString(v.content, 90);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取文章总数量
    _getArticleCount() {
      getArticleCount({ catalog })
        .then(res => {
          this.articleCount = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.pageTo(val, this.pageSize);
    },
    pageTo(page, pageSize = 10) {
      if (page < 1 || page > Math.ceil(this.articleCount / pageSize)) return;
      this.curPage = page;
      this.selectArticle(page, pageSize);
    },
    //跳转页面
    linkToCurPage(paramsData) {
      this.$router.push({
        name: "Catalog",
        params: {
          catalog: paramsData
        }
      });
      this.routerRefresh(); //调用app.vue里面的routerRefresh()方法，完成摧毁和重建过程
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  border-radius: 5px;
  background-color: #fff;
  margin: 30px 0;
  color: rgba(0, 0, 0, 0.7);
  padding: 15px;
}
#page-nav /deep/.number.active {
  background-color: #5a5e66;
  color: #ffffff;
}
.link {
  color: #333333;
  cursor: pointer;
}
.link:hover {
  color: #8a8a8a;
}
</style>
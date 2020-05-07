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
              :key="item.id"
            >
              <div class="card-title">
                <a :href="item.link">{{item.title}}</a>
              </div>
              <div class="card-meta-top">
                <span class="card-meta-cate">
                  <i class="iconfont icon-biaoqian1"></i>
                  <a :href="item.categoryLink">{{item.category}}</a>
                </span>
                <span class="card-meta-date">
                  <i class="iconfont icon-shijian"></i> {{item.createTime}}
                </span>
              </div>
              <a :href="item.link">
                <div
                  class="card-thumbnail lazyload"
                  :data-original="item.bgImg"
                  :style="{backgroundImage: 'url('+item.bgImg+')',backgroundRepeat:'no-repeat',backgroundSize:'100%',backgroundPosition:'center'}"
                ></div>
              </a>
              <div class="card-body">{{item.body}}</div>
              <div class="card-line"></div>
              <ul class="card-meta-bottom">
                <li class="card-meta-label card-meta-more">
                  <a
                    :href="item.link"
                    title="Read More"
                    target="_blank" 
                  >
                    <i class="iconfont icon-gengduo"></i>
                  </a>
                </li>
                <li class="card-meta-label card-meta-views card-meta-right">
                  <i class="iconfont icon-liulan"></i> {{item.viewCount}}
                </li>
                <li class="card-meta-label card-meta-comments card-meta-right">
                  <i class="iconfont icon-comment"></i>  {{item.commentsCount}}
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
export default {
 data() {
    return {
      articleList: [
        {
          id: "1",
          title: "给博客添加live2d人物教程",
          link: "https://www.rinbowli.cn/index.php/archives/12/",
          category: "其他",
          categoryLink: "https://www.rinbowli.cn/index.php/category/other/",
          createTime: "2020-03-23",
          body:
            "1.首先是资源文件这里是下载链接，永久有效链接：https://pan.baidu.com/s...",
          commentsCount: "0",
          viewCount: "20",
          bgImg: "https://www.rinbowli.cn/usr/uploads/images/bg4.jpg"
        },
        {
          id: "2",
          title: "给博客添加live2d人物教程",
          link: "https://www.rinbowli.cn/index.php/archives/12/",
          category: "其他",
          categoryLink: "https://www.rinbowli.cn/index.php/category/other/",
          createTime: "2020-03-23",
          body:
            "1.首先是资源文件这里是下载链接，永久有效链接：https://pan.baidu.com/s...",
          commentsCount: "0",
          viewCount: "20",
          bgImg: "https://www.rinbowli.cn/usr/uploads/images/bg4.jpg"
        },
        {
          id: "3",
          title: "给博客添加live2d人物教程",
          link: "https://www.rinbowli.cn/index.php/archives/12/",
          category: "其他",
          categoryLink: "https://www.rinbowli.cn/index.php/category/other/",
          createTime: "2020-03-23",
          body:
            "1.首先是资源文件这里是下载链接，永久有效链接：https://pan.baidu.com/s...",
          commentsCount: "0",
          viewCount: "20",
          bgImg: "https://www.rinbowli.cn/usr/uploads/images/bg4.jpg"
        },
        {
          id: "4",
          title: "给博客添加live2d人物教程",
          link: "https://www.rinbowli.cn/index.php/archives/12/",
          category: "其他",
          categoryLink: "https://www.rinbowli.cn/index.php/category/other/",
          createTime: "2020-03-23",
          body:
            "1.首先是资源文件这里是下载链接，永久有效链接：https://pan.baidu.com/s...",
          commentsCount: "0",
          viewCount: "20",
          bgImg: "https://www.rinbowli.cn/usr/uploads/images/bg4.jpg"
        },
        {
          id: "5",
          title: "给博客添加live2d人物教程",
          link: "https://www.rinbowli.cn/index.php/archives/12/",
          category: "其他",
          categoryLink: "https://www.rinbowli.cn/index.php/category/other/",
          createTime: "2020-03-23",
          body:
            "1.首先是资源文件这里是下载链接，永久有效链接：https://pan.baidu.com/s...",
          commentsCount: "0",
          viewCount: "20",
          bgImg: "https://www.rinbowli.cn/usr/uploads/images/bg4.jpg"
        }
      ]
    };
  }
}
</script>

<style>

</style>
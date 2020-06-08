<template>
  <div class="about">
    <div class="about-head">
      <div class="av-container av-visible">
        <img
          class="aniview animated fadeInDown"
          data-av-animation="fadeInDown"
          src="@/assets/touxiang.jpg"
          width="60px"
          alt
          style="opacity: 1;"
        />
      </div>
      <div class="av-container av-visible">
        <h1
          class="aniview animated fadeInUp"
          data-av-animation="fadeInUp"
          style="opacity: 1;"
        >RinbowLi</h1>
      </div>
      <div class="av-container av-visible">
        <p
          class="aniview animated fadeInUp"
          data-av-animation="fadeInUp"
          style="opacity: 1;"
        >一枚渣渣前端攻城狮，记录前端学习爬坑经历</p>
      </div>
      <p class="addr">
        <i class="iconfont icon-weizhi"></i>广东-深圳
      </p>
      <div class="iconlist">
        <a
          target="_blank"
          title="点击QQ联系我 1165973875"
          onclick="window.open('tencent://message/?uin=1165973875&amp;&amp;Site=&amp;Menu-=yes')"
          rel="external nofollow"
        >
          <i class="iconfont icon-qq"></i>
        </a>
        <a href="mailto:1165973875@qq.com" title="点击邮箱联系我 1165973875@qq.com">
          <i class="iconfont icon-youxiang"></i>
        </a>
        <a target="_blank" href="https://github.com/rinbowLi">
          <i class="iconfont icon-github"></i>
        </a>
      </div>
    </div>
    <div class="aboutmy">
      <div class="banner-bgImage">
        <div class="banner-bgImageMask">
          <div class="speaking">
            <div class="av-container av-visible">
              <p
                class="subc aniview animated fadeInUp"
                data-av-animation="fadeInUp"
                style="opacity: 1;"
              >一直想做自己做一个博客网站，前后端都自己做的那种，年前的时候用了typecho搭建了一套自己的博客网站，但也是用一套模板生成的，没什么技术含量，后来自己在b站上面学习了一段时间的nodejs,,就有了自己重构博客网站的想法，于是开始动手做，把之前搭建的博客网站用vue+node重构了一次，博客网站主体部分样式参考<a href="https://eriri.ink/archives/Typecho-Theme-Aria.html" target="_blank">Typecho-Theme-Aria</a>,时光轴、留言等页面样式参考<a href="https://www.tanj.com.cn/" target="_blank">TanJia</a>。目前网站只做了一些基础的功能，可能有很多问题，欢迎大家提bug和建议，留言。</p>
            </div>
          </div>
        </div>
        <div class="aboutStudy">
          <div class="myStudy clearfix">
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  HTML5
                  <span class="progress_number">80%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #1abc9c; width: 80%;"
                ></span>
              </div>
            </div>
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  CSS3
                  <span class="progress_number">75%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #ff5500; width: 75%;"
                ></span>
              </div>
            </div>
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  JavaScript
                  <span class="progress_number">80%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #5555ff; width: 80%;"
                ></span>
              </div>
            </div>
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  JQuery
                  <span class="progress_number">50%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #aa55ff; width: 50%;"
                ></span>
              </div>
            </div>
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  Vue.js
                  <span class="progress_number">85%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #55aa00; width: 85%;"
                ></span>
              </div>
            </div>
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  node.js
                  <span class="progress_number">30%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #ff7280; width: 30%;"
                ></span>
              </div>
            </div>
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  C# .Net
                  <span class="progress_number">20%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #d2d200; width: 20%;"
                ></span>
              </div>
            </div>
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  mongoDB
                  <span class="progress_number">30%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #2fbdff; width: 30%;"
                ></span>
              </div>
            </div>
            <div class="progress_bar">
              <div class="pro-bar">
                <small class="progress_bar_title">
                  PhotoShop
                  <span class="progress_number">40%</span>
                </small>
                <span
                  class="progress-bar-inner"
                  style="background-color: #55557f; width: 40%;"
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-web">
          <div class="myweb">
            <h2>关于本站</h2>
            <div>
              <p>
                前 端 ：VUE全家桶   <a href="https://github.com/rinbowLi/myBlog" style="color:blue" target="_blank">github地址,欢迎点赞哦~</a>
                <br />插 件 ：highlight.js(代码高亮插件)、clipboard(点击复制代码插件)、marked(渲染Markdown格式插件)、mavon-editor(Markdown编写插件)、element-ui、vuex-persistedstate(vuex持久化插件)
                <br />后 端 ：Node.js + Express + MongoDB + Mongoose  <a href="https://github.com/rinbowLi/myBlog-node" style="color:blue" target="_blank">github地址,欢迎点赞哦~</a>
              </p>
            </div>
            <h2>特别说明</h2>
            <div>
              <p>
                本站文章仅代表个人观点，和任何组织或个人无关。
                <br />本站对主流浏览器均兼容。
                <br />用户留言邮箱仅作回复消息用，不对外使用。
                <br />关于本站UI设计,留言板、时光轴、关于、友链页面UI设计参考<a href="https://www.tanj.com.cn/" style="color:blue" target="_blank">TanJia</a>
              </p>
            </div>
            <h2>关于版权</h2>
            <p>
              本站文章均为原创，转载请标明出处。只要在使用时注明出处，那么您可以可以对本站内容进行转载、节选、二次创作，但是您不得对其用于商业目的。
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@-webkit-keyframes animate-positive {
  0% {
    width: 0%;
  }
}
@keyframes animate-positive {
  0% {
    width: 0%;
  }
}

.about {
  min-height: 100vh;
  background: #fff url("../../assets/aboutBack.png") 100% 100% no-repeat;
  background-attachment: fixed;
  .about-head {
    padding-top: 160px;
    text-align: center;
    margin: auto;
    h1 {
      margin: 0 0 13px 0;
    }
    p.addr {
      color: #808080;
      font-size: 13px;
      margin-top: 15px;
      i {
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .iconlist {
      margin: 20px 10% 0 10%;
      padding: 20px;
      border: 1px solid #f6f5ff;
      border-right: none;
      border-left: none;
      a i {
        color: #52515c;
        font-size: 30px;
        margin: 5px;
        cursor: pointer;
      }
    }
  }
  .aboutmy {
    margin: auto;
    background-color: #6a70ec;
    .banner-bgImage {
      width: 100%;
      min-width: 1100px;
      background-size: cover;
      background-attachment: fixed;
      background-image: url("../../assets/back.jpg");
      .banner-bgImageMask {
        width: 100%;
        height: 200px;
        background: linear-gradient(
          135deg,
          rgba(94, 136, 255, 0.6) 0,
          rgba(94, 18, 214, 0.8) 100%
        );
        .speaking {
          z-index: 1000;
          text-align: center;
          padding: 40px 50px;
          width: 900px;
          margin: auto;
          line-height: 25px;
          text-indent: 2em;
          .subc {
            text-align: justify;
            color: #e1e2ec;
            font-size: 13px;
          }
        }
      }
      .aboutStudy {
        /* padding: 50px; */
        min-width: 1100px;
        box-sizing: border-box;
        background: url("../../assets/indexbg3.png") 100% 100% no-repeat;
        background-size: 100%;
        .myStudy {
          width: 1080px;
          margin: auto;
          .progress_bar {
            width: 300px;
            float: left;
            margin: 20px 30px;
            .pro-bar {
              background: hsl(0, 0%, 91%);
              box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1) inset;
              height: 6px;
              margin-bottom: 12px;
              margin-top: 50px;
              position: relative;
            }
            .progress_bar_title {
              color: hsl(218, 4%, 50%);
              font-size: 15px;
              font-weight: 300;
              position: relative;
              top: -28px;
              z-index: 1;
              .progress_number {
                float: right;
                margin-top: 2px;
              }
            }
            .progress-bar-inner {
              background-color: hsl(0, 0%, 88%);
              display: block;
              width: 0;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              transition: width 1s linear 0s;
              animation: animate-positive 2s;
            }
            .progress-bar-inner:before {
              content: "";
              background-color: hsl(0, 0%, 100%);
              border-radius: 50%;
              width: 4px;
              height: 4px;
              position: absolute;
              right: 1px;
              top: 0;
              z-index: 1;
            }
            .progress-bar-inner:after {
              content: "";
              width: 14px;
              height: 14px;
              background-color: inherit;
              border-radius: 50%;
              position: absolute;
              right: -4px;
              top: -5px;
            }
          }
        }
      }
      .about-web {
        min-width: 1100px;
        margin: auto;
        box-sizing: border-box;
        padding: 30px 50px;
        background: #fff;
      }
    }
  }
}
</style>
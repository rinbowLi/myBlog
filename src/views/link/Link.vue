<template>
  <div class="msg">
    <div class="sban">
      <p class="s-t">链接申请说明</p>
      <div class="link-myd">
        <p class="lit">交换友链可在留言板留言，同时请将本站加入友链</p>
      </div>
      <div class="s-d">
        <p class="p-bold">名称：RinbowLi</p>
        <p class="p-bold">网址：https://www.rinbowli.cn/</p>
        <p class="p-bold">图标：https://www.rinbowli.cn/public/img/lg.png</p>
        <p class="p-bold">描述：哈哈哈</p>
      </div>
      <div class="link-myd des">
        <p>本站优先选择同类原创、内容相近的博客或网站，您的站点内容可以为技术类、IT科技、互联网和生活</p>
        <p>任何包含违反国家法律法规内容的网站均不采纳</p>
        <p>特别提醒：申请提交后若无其它原因将在24小时内完成审核,如超过时间还未通过,请留言或私信给我</p>
      </div>
    </div>
    <div class="msgPanel">
      <p class="s-t">友情链接</p>
      <ul class="link-list clearfix">
        <li class="link-item" v-for="item in linkList" :key="item._id">
          <a target="_blank" :href="item.link">
            <div class="link-f">
              <img class="linkLogo" :src="item.imgUrl" />
              <span>{{item.name}}</span>
            </div>
            <p class="link-s">{{item.desc}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { selectLink } from "@/network/link";
export default {
  name: "Link",
  data() {
    return {
      linkList: []
    };
  },
  created() {
    this.selectAllLink();
  },
  methods: {
    selectAllLink() {
      selectLink()
        .then(res => {
          console.log(res);
          this.linkList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.msg {
  background-color: #f0f2f5;
  height: 100%;
  margin-top: 90px;
  .sban,
  .msgForm,
  .msgPanel {
    width: 1100px;
    background-color: #fff;
    margin: auto;
    margin-top: 30px;
    padding: 30px;
    box-sizing: border-box;
    .s-t {
      font-weight: 700;
      color: #333;
    }
    .link-myd {
      margin-top: 10px;
      .link-myd .lit {
        font-size: 14px;
      }
    }
    .s-d {
      background-color: #f3f5f9;
      margin-top: 20px;
      padding: 20px;
      font-size: 14px;
      color: #8a89a5;
      line-height: 24px;
      border-left: 4px solid #cbd8f5;
      .p-bold {
        /* font-weight: bold; */
        line-height: 29px;
        color: #5757c8;
      }
    }
    .link-myd.des {
      font-size: 13px;
      color: #666;
      line-height: 24px;
      margin-top: 10px;
    }
  }
  .msgPanel {
    padding-bottom: 40px;
    .s-t {
      font-weight: 700;
      color: #333;
    }
    .link-list {
      margin-top: 20px;
      padding: 0;
      .link-item {
        width: 250px;
        float: left;
        border: 1px solid #f4f4f4;
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 2px;
        margin: 10px 10px 10px 0;
        .linkLogo {
          display: inline-block;
          width: 40px;
          /* height: 40px; */
          border-radius: 50%;
          vertical-align: middle;
        }
        a .link-f {
          height: 40px;
          span {
            vertical-align: middle;
            font-size: 16px;
            color: #333;
            display: inline-block;
            width: 155px;
            padding-left: 6px;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
        }
        a .link-s {
          color: #333;
          clear: both;
          display: -webkit-box;
          overflow: hidden;
          margin-top: 5px;
          line-height: 21px;
          height: 65px;
          text-overflow: ellipsis;
          font-size: 13px;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      }
    }
  }
  .msgForm,
  .msgPanel {
    margin: 8px auto;
  }
}
</style>
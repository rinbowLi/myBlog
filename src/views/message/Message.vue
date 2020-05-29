<template>
  <div class="container">
    <div class="msg">
      <div class="sban">
        <p class="s-t">留言板</p>
        <div class="s-d">
          <p>对于不正当留言，会删除处理。</p>
          <p>1. 欢迎各种留言，技术交流、生活趣事、小说、电影、以及各种吐槽......</p>
          <p>2. 忌不正当留言，辱骂、不健康、不文明等危险言论。</p>
          <p>做社会主义新时代好青年！！！</p>
        </div>
        <p class="s-o">
          <span>
            <i class="iconfont icon-qq"></i>1165973875
          </span>
          <span>
            <i class="iconfont icon-youxiang"></i> 1165973875@qq.com
          </span>
        </p>
      </div>
      <div class="msgForm mg-20">
        <div class="form-group">
          <label class="input-desc">昵称</label>
          <input
            class="input-con input-bottom"
            name="username"
            type="text"
            placeholder="请输入您的昵称"
            v-model="username"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label class="input-desc">邮箱</label>
          <input
            class="input-con input-bottom"
            name="email"
            type="email"
            placeholder="请输入您的邮箱 方便回复 (选填)"
            v-model="email"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label class="input-desc">内容</label>
          <textarea
            class="input-con input-bottom"
            name="content"
            rows="4"
            placeholder="请输入您的留言内容"
            v-model="content"
            autocomplete="off"
          ></textarea>
        </div>
        <div class="form-group">
          <label class="input-desc">验证码</label>
          <input
            class="input-con input-bottom captcha-input"
            name="captcha"
            type="text"
            placeholder="请输入验证码 不区分大小写"
            v-model="code"
            autocomplete="off"
          />
          <div class="captcha" v-html="captcha" @click="getCaptcha()" title="看不清？点击更新"></div>
        </div>
        <p class="captchaInfo"></p>
        <input type="submit" class="subMsg" value="提交留言" @click="submit()" />
      </div>
      <div class="msgPanel">
        <p class="s-t">留言列表（{{msgCount}}）</p>
        <div class="msgList">
          <ul id="msgListUl" class="clearfix">
            <li class="msg-item" v-for="item in messageList" :key="item.id">
              <div class="msg-div clearfix">
                <div class="li-r fl">
                  <img src="@/assets/avatar2.png" alt="默认头像" />
                </div>
                <div class="li-l fl">
                  <p class="name">
                    <span>{{item.name}}</span>
                    <span class="time">{{item.createTime}}</span>
                  </p>
                  <p class="msgda">{{item.content}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div id="page-nav" v-show="msgCount>10">
        <el-pagination
          :current-page="curPage"
          background
          :page-size="pageSize"
          layout="prev, pager, next,jumper"
          :total="msgCount"
          @current-change="handleCurrentChange"
          @prev-click="pageTo(curPage-1)"
          @next-click="pageTo(curPage+1)"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {
  captcha,
  selectMessageByPage,
  addmessage,
  getMessageCount
} from "@/network/message";

import { getFormatTime } from "@/utils/utils";

import { Message } from "element-ui";

export default {
  name: "Message",
  data() {
    return {
      captcha: "",
      text: "", //后端返回的验证码内容
      username: "", //昵称
      content: "", //留言内容
      email: "", //邮箱
      msgCount: 0,
      pageSize: 10,
      curPage: 1,
      messageList: [],
      code: "" //验证码
    };
  },
  created() {
    this.getCaptcha();
    this.selectMessage();
    this._getMessageCount();
  },
  methods: {
    getCaptcha() {
      captcha()
        .then(res => {
          this.captcha = res.data.data;
          this.text = res.data.text;
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getMessageCount() {
      getMessageCount().then(res => {
        this.msgCount = res.data;
      });
    },
    selectMessage(page = 1, pageSize = 10) {
      let data = {
        pageSize,
        page
      };
      selectMessageByPage(data)
        .then(res => {
          this.messageList = res.data;
          this.messageList.map(v => {
            v.createTime = getFormatTime(v.createTime);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    pageTo(page, pageSize = 10) {
      if (page < 1 || page > Math.ceil(this.articleCount / pageSize)) return;
      this.curPage = page;
      this.selectMessage(page, pageSize);
    },
    handleCurrentChange(val) {
      this.pageTo(val, this.pageSize);
    },
    submit() {
      let name = this.username;
      let content = this.content;
      let email = this.email;
      let code = this.code;
      if (!name) {
        Message({
          message: "请填写昵称哦~",
          type: "warning"
        });
        return;
      }
      if (!content) {
        Message({
          message: "请填写留言内容哦~",
          type: "warning"
        });
        return;
      }
      if (code != this.text) {
        Message({
          message: "请填写正确的验证码哦~",
          type: "warning"
        });
        return;
      }

      addmessage({ name, content, email })
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            Message({
              message: "留言提交成功(*^__^*) 嘻嘻~",
              type: "success"
            });
            //提交成功后清空表单  重新获取验证码 重新获取留言
            this.username = "";
            this.content = "";
            this.email = "";
            this.code = "";
            this.getCaptcha();
            this.selectMessage();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 60px;
  .msg {
    background-color: #f0f2f5;
    height: 100%;
    padding-bottom: 30px;
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
      .s-d {
        background-color: #f3f5f9;
        margin-top: 20px;
        padding: 20px;
        font-size: 14px;
        color: #8a89a5;
        line-height: 24px;
        border-left: 4px solid #cbd8f5;
      }
      .s-o span {
        display: inline-block;
        margin-top: 20px;
        color: #6a70ec;
        font-size: 13px;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    .msgForm,
    .msgPanel {
      margin: 8px auto;
    }
    .form-group {
      position: relative;
      .input-desc {
        display: block;
        font-size: 14px;
        font-weight: 700;
        font-family: "Open Sans", Verdana;
        text-transform: uppercase;
        margin-bottom: 7px;
      }
      .input-bottom {
        -webkit-transition: padding 0.45s;
        border-radius: 0px;
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
        border-bottom: 2px solid #eee;
        background-color: transparent;
        box-shadow: none;
      }
      .input-con {
        display: block;
        margin-bottom: 15px;
        width: 100%;
        height: 34px;
        padding: 9px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #888;
        outline: none;
        box-sizing: border-box;
      }
    }
    .subMsg {
      line-height: 1.15;
      padding: 8px 18px;
      color: #fff;
      background-color: #6a70ec;
      border-color: #6a70ec;
      font-size: 14px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
  }
  .msgPanel {
    padding-bottom: 40px;
    .msg-item {
      /* margin: 15px 0; */
      margin-top: 25px;
    }
  }
  .fl {
    float: left;
  }
  .li-r img {
    width: 40px;
    border-radius: 50%;
  }
  .li-l {
    width: 1000px;
    padding-left: 18px;
    box-sizing: border-box;
    .name {
      font-size: 15px;
      color: #666;
      font-weight: bold;
    }
    .name .time {
      padding-left: 10px;
      font-size: 13px;
      color: #9e9e9e;
      font-weight: 300;
    }
  }
  li {
    list-style: none;
  }
  .msg-div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .captcha {
    position: absolute;
    bottom: 3px;
    right: 0;
  }
  ul {
    margin-block-start: 0;
    padding-inline-start: 0;
  }
  textarea.input-con {
    height: auto !important;
  }
}
</style>
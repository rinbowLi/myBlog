<template>
  <div id="comments" v-show="allowComment">
    <span id="response">
      <p>
        <i class="iconfont icon-comment"></i>
        {{commentCount}} 条评论
      </p>
    </span>

    <div class="comment-data">
      <ol class="comment-list">
        <li
          class="comment-body comment-parent"
          v-for="(item,index) in commentsList"
          :class="(index+1)%2===0?'comment-even':'comment-odd'"
          :id="'li-comment-'+index"
          :key="item._id"
        >
          <div :id="'comment-'+index">
            <a class="comment-avatar" :href="'#comment-'+index">
              <img class="avatar" v-lazy="require('@/assets/avatar.png')" alt="rinbowLi" width="120" height="120" />
            </a>
            <div class="comment-content">
              <div class="comment-text">
                <span class="comment-reply" style="float:right" title="回复" @click="replyTo(item.id,item.name)">
                  <a href="javascript:;" rel="nofollow">
                    <i class="iconfont icon-huifu"></i>
                  </a>
                </span>
                <p></p>
                <p>{{item.content}}</p>
                <p></p>
              </div>
              <p class="comment-meta">
                By
                <span>
                  <a
                    href="https://www.rinwowLi.cn"
                    rel="external nofollow"
                    target="_blank"
                  >{{item.name}}</a>
                </span>
                at {{_getFormatDate(item.createTime)}}
              </p>
            </div>
          </div>
          <!-- 单条评论者信息及内容 -->
          <div v-if="item.children.length>0">
            <div class="comment-children" v-for="(item1,index1) in item.children" :key="item1._id">
              <ol class="comment-list">
                <li
                  class="comment-body comment-child comment-level-odd"
                  :class="(index+1)%2===0?'comment-even':'comment-odd'"
                  :id="'li-comment-'+item1.id"
                >
                  <div :id="'comment-'+item1.id">
                    <a class="comment-avatar" :href="'#comment-'+index1">
                      <img
                        class="avatar"
                        v-lazy="'@/assets/avatar2.png'"
                        alt="test"
                        width="120"
                        height="120"
                      />
                    </a>
                    <div class="comment-content">
                      <div class="comment-text">
                        <span
                          class="comment-reply"
                          style="float:right"
                          title="回复"
                          @click="replyTo(item.id,item1.name)"
                        >
                          <a href="javascript:;" rel="nofollow">
                            <i class="iconfont icon-huifu"></i>
                          </a>
                        </span>
                        <p>
                          @{{item1.reply}}
                          <br />
                        </p>
                        <p>{{item1.content}}</p>
                        <p></p>
                      </div>
                      <p class="comment-meta">
                        By
                        <span>{{item1.name}}</span>
                        at {{_getFormatDate(item1.createTime)}}
                      </p>
                    </div>
                  </div>
                  <!-- 单条评论者信息及内容 -->
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <div id="respond-post-12" class="respond">
      <div class="cancel-comment-reply">
        <a id="cancel-comment-reply-link" href="javascript:;" rel="nofollow" style="display:none">
          <i class="iconfont icon-aria-cancel"></i>
        </a>
      </div>

      <span id="new-response">
        <i class="iconfont icon-aria-write"></i> 添加新评论
      </span>
      <!-- New Comments begin -->
      <form method="post" id="comment-form" role="form">
        <div id="comment-info">
          <p>
            <img id="comment-avatar" src='@/assets/touxiang.jpg' />
          </p>
          <p class="comment-input" style="width: 90%;">
            <label for="author">
              <i class="iconfont icon-yonghu"></i>
            </label>
            <input
              placeholder="（必填）昵称"
              type="text"
              name="author"
              ref="author"
              id="author"
              class="text"
              v-model="name"
              value
            />
          </p>
        </div>
        <p>
          <label for="textarea"></label>
          <textarea
            rows="8"
            cols="50"
            name="text"
            id="textarea"
            class="textarea"
            v-model="content"
            placeholder="既然来了，那就留下点什么吧O(∩_∩)O"
          ></textarea>
        </p>
        <div id="comment-footer">
          <div class="OwO"></div>
          <!--end .OwO-->
        </div>
        <center>
          <button type="button" class="submit" @click="sumbitForm">
            <i class="iconfont icon-wodefashe"></i> 发射
          </button>
        </center>
      </form>
    </div>
  </div>
</template>

<script>
import { addComments, selectCommentsById } from "@/network/comments";

import { getFormatTime } from "@/utils/utils";

import { Message } from "element-ui";
export default {
  name: "Comments",
  data() {
    return {
      allowComment: true,
      commentCount: 0,
      content: "",
      name: "",
      relatedArticleId: "",
      parent: 0,
      reply:"",
      commentsList: []
    };
  },
  mounted() {
    this.$bus.$on("articleId", data => {
      this.relatedArticleId = data;
      this.selectComments(data);
    });
    this.$bus.$on("commentCount", data => {
      this.commentCount = data;
    });
    this.$bus.$on("allowComment", data => {
      this.allowComment = data;
    });
  },
  methods: {
    //提交评论
    sumbitForm() {
      let content = this.content;
      let name = this.name;
      let relatedArticleId = this.relatedArticleId;
      let parent = this.parent;
      let reply = this.reply;
      if (!name) {
        Message({
          message: "请先填写昵称哦~",
          type: "warning"
        });
        return;
      }
      if (!content) {
        Message({
          message: "请先填写评论内容哦~",
          type: "warning"
        });
        return;
      }
      let data = {
        content,
        name,
        relatedArticleId,
        parent,
        reply
      };
      addComments(data)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            Message({
              message: "评论提交成功~",
              type: "success"
            });
            this.content = "";
            this.name = "";
            this.parent = 0;
            this.reply = "";
            this.selectComments(this.relatedArticleId);
            this.commentCount += 1;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //查询文章相关评论
    selectComments(id) {
      selectCommentsById({ id })
        .then(res => {
          console.log(res);
          this.commentsList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    _getFormatDate(data) {
      console.log(data);
      return getFormatTime(data);
    },
    replyTo(id,name) {
      this.parent = id;
      this.reply = name;
      this.$refs.author.focus();
    },
  }
};
</script>

<style>
</style>
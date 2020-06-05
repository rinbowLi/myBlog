<template>
  <div class="commentMan">
    <el-table :data="commentsList" border>
      <el-table-column prop="name" label="评论人" width="200"></el-table-column>
      <el-table-column fixed prop="content" label="回复内容"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="200"></el-table-column>
      <el-table-column prop="reply" label="回复对象" width="200"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleDel(scope.row._id)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="page-nav" v-show="showPagination">
      <el-pagination
        :current-page="curPage"
        background
        :page-size="pageSize"
        layout="prev, pager, next,jumper"
        :total="commentsCount"
        @current-change="handleCurrentChange"
        @prev-click="pageTo(curPage-1)"
        @next-click="pageTo(curPage+1)"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { MessageBox, Message } from "element-ui";
import { selectCommentsByPage, delComments } from "@/network/comments";
import { getFormatTime, cutString } from "@/utils/utils";
export default {
  name: "commentMan",
  data() {
    return {
      commentsCount: 0,
      pageSize: 10,
      curPage: 1,
      commentsList: []
    };
  },
  computed: {
    showPagination() {
      return (
        Math.ceil(this.commentsCount / this.pageSize) >= 2 || this.curPage != 1
      );
    }
  },
  created() {
    this.selectComments();
  },
  methods: {
    //删除文章
    handleDel(id) {
      MessageBox.confirm("你确定要删除这个评论吗？", "确认删除评论", {
        confirmButtonText: "确认删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delComments({ id })
            .then(res => {
              Message({
                message: "删除成功",
                type: "success",
                duration: 1500
              });
              this.selectComments();
              this.curPage = 1;
            })
            .catch(err => {
              console.log("删除失败", err);
            });
        })
        .catch(err => {
          console.log("取消删除", err);
        });
    },
    //分页查询评论
    selectComments(page = 1, pageSize = 10) {
      let data = {
        pageSize,
        page
      };
      selectCommentsByPage(data)
        .then(res => {
          this.commentsCount = res.total;
          this.commentsList = res.data;
          this.commentsList.map(v => {
            v.createTime = getFormatTime(v.createTime);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.pageTo(val, this.pageSize);
    },
    pageTo(page, pageSize = 10) {
      if (page < 1 || page > Math.ceil(this.commentsCount / pageSize)) return;
      this.curPage = page;
      this.selectComments(page, pageSize);
    }
  }
};
</script>

<style lang="scss" scoped>
.commentMan {
  width: 87.5%;
  overflow-y: scroll;
  height: calc(100vh - 50px);
}
</style>
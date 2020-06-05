<template>
  <div class="messageMan">
    <el-table :data="messagesList" border>
      <el-table-column prop="name" label="留言人" width="200"></el-table-column>
      <el-table-column fixed prop="content" label="回复内容"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="200"></el-table-column>
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
        :total="messagesCount"
        @current-change="handleCurrentChange"
        @prev-click="pageTo(curPage-1)"
        @next-click="pageTo(curPage+1)"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { MessageBox, Message } from "element-ui";
import {
  selectMessageByPage,
  getMessageCount,
  delMessage
} from "@/network/message";
import { getFormatTime } from "@/utils/utils";
export default {
  name: "messageMan",
  data() {
    return {
      messagesCount: 0,
      pageSize: 10,
      curPage: 1,
      messagesList: []
    };
  },
  computed: {
    showPagination() {
      return (
        Math.ceil(this.messagesCount / this.pageSize) >= 2 || this.curPage != 1
      );
    }
  },
  created() {
    this.selectMessages();
    this._getMessageCount();
  },
  methods: {
    //删除文章
    handleDel(id) {
      MessageBox.confirm("你确定要删除这个留言吗？", "确认删除留言", {
        confirmButtonText: "确认删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delMessage({ id })
            .then(res => {
              Message({
                message: "删除成功",
                type: "success",
                duration: 1500
              });
              this.selectMessages();
              this._getMessageCount();
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
    //分页查询留言
    selectMessages(page = 1, pageSize = 10) {
      let data = {
        pageSize,
        page
      };
      selectMessageByPage(data)
        .then(res => {
          this.messagesList = res.data;
          this.messagesList.map(v => {
            v.createTime = getFormatTime(v.createTime);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取留言总数量
    _getMessageCount() {
      getMessageCount()
        .then(res => {
          this.messagesCount = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.pageTo(val, this.pageSize);
    },
    pageTo(page, pageSize = 10) {
      if (page < 1 || page > Math.ceil(this.messagesCount / pageSize)) return;
      this.curPage = page;
      this.selectMessages(page, pageSize);
    }
  }
};
</script>

<style lang="scss" scoped>
.messageMan {
  width: 87.5%;
  overflow-y: scroll;
  height: calc(100vh - 50px);
}
</style>
<template>
  <div class="timelineMan">
    <div class="header">
      <el-button @click="openDialog()" type="success" size="small">新增时光轴</el-button>
    </div>
    <el-table :data="timelinesList" border>
      <el-table-column prop="content" label="时光轴内容"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="200"></el-table-column>
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
        :total="timelinesCount"
        @current-change="handleCurrentChange"
        @prev-click="pageTo(curPage-1)"
        @next-click="pageTo(curPage+1)"
      ></el-pagination>
    </div>
    <el-dialog width="80%" :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="form"
        label-position="left"
        label-width="100px"
        style="margin-left:20px;"
      >
        <el-form-item label="时光轴内容" prop="content">
          <el-input v-model="form.content" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addMyTimeline()">确认</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { MessageBox, Message } from "element-ui";
import {
  selectTimelineByPage,
  delTimeline,
  addtimeline
} from "@/network/timeline";
import { getFormatTime } from "@/utils/utils";
export default {
  name: "timelineMan",
  data() {
    return {
      timelinesCount: 0,
      pageSize: 10,
      curPage: 1,
      timelinesList: [],
      dialogFormVisible: false,
      dialogTitle: "新增时光轴",
      form: {
        content: "" //时光轴内容
      },
      rules: {
        content: [
          { required: true, message: "时光轴内容必填", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    showPagination() {
      return (
        Math.ceil(this.timelinesCount / this.pageSize) >= 2 || this.curPage != 1
      );
    }
  },
  created() {
    this.selectTimeline();
  },
  methods: {
    //删除文章
    handleDel(id) {
      MessageBox.confirm(
        "你确定要删除这条时光轴内容吗吗？",
        "确认删除时光轴内容",
        {
          confirmButtonText: "确认删除",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          delTimeline({ id })
            .then(res => {
              Message({
                message: "删除成功",
                type: "success",
                duration: 1500
              });
              this.selectTimeline();
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
    openDialog() {
      this.dialogFormVisible = true;
    },
    addMyTimeline() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          let data = {
            content: this.form.content
          };
          addtimeline(data)
            .then(res => {
              Message({
                message: "时光轴新增成功",
                type: "success",
                duration: 1500
              });
              this.dialogFormVisible = false;
              this.selectTimeline();
              this.$refs.dataForm.resetFields();
              this.$refs.dataForm.clearValidate();
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    //分页查询留言
    selectTimeline(page = 1, pageSize = 10) {
      let data = {
        pageSize,
        page
      };
      selectTimelineByPage(data)
        .then(res => {
          this.timelinesList = res.data;
          this.timelinesList.map(v => {
            v.time = getFormatTime(v.time);
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
      if (page < 1 || page > Math.ceil(this.timelinesCount / pageSize)) return;
      this.curPage = page;
      this.selectMessages(page, pageSize);
    }
  }
};
</script>

<style lang="scss" scoped>
.timelineMan {
  width: 87.5%;
  overflow-y: scroll;
  height: calc(100vh - 50px);
}
.header {
  width: 96%;
  text-align: right;
  padding: 10px;
  margin-right: 20px;
}
</style>
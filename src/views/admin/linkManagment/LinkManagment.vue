<template>
  <div class="linkMan">
    <div class="header">
      <el-button @click="openDialog()" type="success" size="small">新增友链</el-button>
    </div>
    <el-table :data="linksList" border>
      <el-table-column prop="name" label="友链名称" width="300"></el-table-column>
      <el-table-column prop="link" label="友链链接" width="200"></el-table-column>
      <el-table-column label="友链图片url" width="250">
        <template slot-scope="scope">
          <img v-lazy="scope.row.imgUrl" height="40" class="head_pic" />
        </template>
      </el-table-column>
      <el-table-column prop="desc" label="友链描述"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="150"></el-table-column>
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
        :total="linksCount"
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
        <el-form-item label="友链名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="友链链接" prop="link">
          <el-input v-model="form.link" />
        </el-form-item>
        <el-form-item label="友链图片url" prop="imgUrl">
          <el-input v-model="form.imgUrl" />
        </el-form-item>
        <el-form-item label="友链描述" prop="desc">
          <el-input v-model="form.desc" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addMyLink()">确认</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { MessageBox, Message } from "element-ui";
import { selectLinkByPage, delLink, addLink } from "@/network/link";
import { getFormatTime } from "@/utils/utils";
export default {
  name: "linkMan",
  data() {
    return {
      linksCount: 0,
      pageSize: 10,
      curPage: 1,
      linksList: [],
      dialogFormVisible: false,
      dialogTitle: "新增友链",
      form: {
        name: "",
        link: "",
        imgUrl: "",
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "友链名称必填", trigger: "blur" }],
        link: [{ required: true, message: "友链链接必填", trigger: "blur" }]
      }
    };
  },
  computed: {
    showPagination() {
      return (
        Math.ceil(this.linksCount / this.pageSize) >= 2 || this.curPage != 1
      );
    }
  },
  created() {
    this.selectLink();
  },
  methods: {
    //删除文章
    handleDel(id) {
      MessageBox.confirm("你确定要删除这条友链内容吗吗？", "确认删除友链内容", {
        confirmButtonText: "确认删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delLink({ id })
            .then(res => {
              Message({
                message: "删除成功",
                type: "success",
                duration: 1500
              });
              this.selectLink();
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
    addMyLink() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          let data = {
            name: this.form.name,
            link: this.form.link,
            imgUrl: this.form.imgUrl,
            desc: this.form.desc
          };
          addLink(data)
            .then(res => {
              Message({
                message: "友链新增成功",
                type: "success",
                duration: 1500
              });
              this.dialogFormVisible = false;
              this.selectLink();
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
    selectLink(page = 1, pageSize = 10) {
      let data = {
        pageSize,
        page
      };
      selectLinkByPage(data)
        .then(res => {
          this.linksList = res.data;
          this.linksList.map(v => {
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
      if (page < 1 || page > Math.ceil(this.linksCount / pageSize)) return;
      this.curPage = page;
      this.selectMessages(page, pageSize);
    }
  }
};
</script>

<style lang="scss" scoped>
.linkMan {
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
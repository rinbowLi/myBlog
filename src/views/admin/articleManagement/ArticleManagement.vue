<template>
  <div class="articleMan">
    <div class="header">
      <el-button @click="openDialog('create')" type="success" size="small">新增文章</el-button>
    </div>
    <el-table :data="articleList" border>
      <el-table-column fixed prop="title" label="文章标题" width="150"></el-table-column>
      <el-table-column prop="cutContent" label="文章内容"></el-table-column>
      <el-table-column prop="catalog" label="文章分类" width="120"></el-table-column>
      <el-table-column prop="commentCount" label="评论数" width="120"></el-table-column>
      <el-table-column prop="viewsCount" label="浏览量" width="300"></el-table-column>
      <el-table-column
        prop="allowComment"
        label="是否允许评论"
        :formatter="formatAllowComment"
        width="120"
      ></el-table-column>
      <el-table-column prop="isTop" :formatter="formatIsTop" label="是否置顶" width="120"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="openDialog('edit',scope.row)" type="primary" size="small">编辑</el-button>
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
        :total="articleCount"
        @current-change="handleCurrentChange"
        @prev-click="pageTo(curPage-1)"
        @next-click="pageTo(curPage+1)"
      ></el-pagination>
    </div>

    <el-dialog
      width="80%"
      :title="dialogTitle"
      :visible.sync="dialogFormVisible"
      @close="closeDialog()"
    >
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="form"
        label-position="left"
        label-width="100px"
        style="margin-left:20px;"
      >
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>

        <el-form-item label="文章分类" prop="catalog">
          <el-input v-model="form.catalog" />
        </el-form-item>
        <el-form-item label="文章标签" prop="tags">
          <el-input v-model="form.tags" />
        </el-form-item>
        <el-form-item label="是否置顶" prop="isTop">
          <el-switch v-model="form.isTop"></el-switch>
        </el-form-item>
        <el-form-item label="是否允许评论" prop="allowComment">
          <el-switch v-model="form.allowComment"></el-switch>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
          <mavon-editor v-model="form.content" ref="md" style="min-height: 600px" />
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogStatus==='create'?addMyArticle():updateMyArticle()"
        >确认</el-button>
        <el-button @click="closeDialog()">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { MessageBox, Message } from "element-ui";
import {
  selectNextAndPrevArticle,
  addArticle,
  delArticle,
  updateArticle
} from "@/network/article";
import { selectArticleByPage, getArticleCount } from "@/network/home";
import { getFormatDate, cutString } from "@/utils/utils";
export default {
  name: "articleMan",
  components: {
    mavonEditor //mavon-editor组件
  },
  data() {
    return {
      articleCount: 0,
      pageSize: 6,
      curPage: 1,
      articleList: [],
      dialogTitle: "编辑文章",
      dialogFormVisible: false,
      dialogStatus: "create",
      form: {
        title: "",
        catalog: "",
        tags: "",
        isTop: false,
        allowComment: true,
        content: "" //Markdown内容
      },
      rules: {
        catalog: [{ required: true, message: "文章分类必填", trigger: "blur" }],
        title: [{ required: true, message: "文章标题必填", trigger: "blur" }],
        content: [{ required: true, message: "文章内容必填", trigger: "blur" }]
      }
    };
  },
  computed: {
    showPagination() {
      return (
        Math.ceil(this.articleCount / this.pageSize) >= 2 || this.curPage != 1
      );
    }
  },
  created() {
    this.init();
  },
  methods: {
    closeDialog() {
      //关闭对话框，重置表单
      this.dialogFormVisible = false;
      this.$refs.dataForm.resetFields();
      this.$refs.dataForm.clearValidate();
      this.form = {
        title: "",
        catalog: "",
        tags: "",
        isTop: false,
        allowComment: true,
        content: "" //Markdown内容
      };
    },
    //格式化是否允许评论
    formatAllowComment(row, column) {
      return row.allowComment === 1 ? "是" : "否";
    },
    //格式化是否置顶
    formatIsTop(row, column) {
      return row.isTop === 1 ? "是" : "否";
    },
    openDialog(flag, row) {
      let data = Object.assign({}, row); //复制一个新的对象
      this.dialogStatus = flag;
      if (flag === "create") {
        //新增文章的操作
        this.dialogTitle = "新增文章";
        this.content = "";
      } else {
        //编辑文章的操作
        this.dialogTitle = "编辑文章";
        this.form.content = data.content;
        this.form.title = data.title;
        this.form.catalog = data.catalog;
        this.form.tags = data.tags;
        this.form.isTop = data.isTop === 1; //为1时就是置顶
        this.form.allowComment = data.allowComment === 1; //为1时是允许评论
        this.form.id = data._id;
      }
      this.dialogFormVisible = true;
    },
    addMyArticle() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          let data = {
            title: this.form.title,
            content: this.form.content,
            catalog: this.form.catalog,
            tags: this.form.tags,
            isTop: this.form.isTop,
            allowComment: this.form.allowComment
          };
          addArticle(data)
            .then(res => {
              Message({
                message: "文章新增成功",
                type: "success",
                duration: 1500
              });
              this.dialogFormVisible = false;
              this.init();
              this.$refs.dataForm.resetFields();
              this.$refs.dataForm.clearValidate();
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    //更新文章
    updateMyArticle() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          let data = {
            id: this.form.id,
            title: this.form.title,
            content: this.form.content,
            catalog: this.form.catalog,
            tags: this.form.tags,
            isTop: this.form.isTop,
            allowComment: this.form.allowComment
          };
          updateArticle(data)
            .then(res => {
              Message({
                message: "文章更新成功",
                type: "success",
                duration: 1500
              });
              this.dialogFormVisible = false;
              this.init();
              this.$refs.dataForm.resetFields();
              this.$refs.dataForm.clearValidate();
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    //删除文章
    handleDel(id) {
      MessageBox.confirm("你确定要删除这篇文章吗？", "确认删除文章", {
        confirmButtonText: "确认删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delArticle({ id })
            .then(res => {
              Message({
                message: "删除成功",
                type: "success",
                duration: 1500
              });
              this.init();
              this.curPage = 1;
            })
            .catch(err => {
              console.log("删除失败");
            });
        })
        .catch(err => {
          console.log("取消删除");
        });
    },
    //初始化 获取文章和文章数量
    init() {
      this.selectArticle();
      this._getArticleCount();
    },
    //分页查询文章
    selectArticle(page = 1, pageSize = 6) {
      let data = {
        pageSize,
        page
      };
      selectArticleByPage(data)
        .then(res => {
          this.articleList = res.data;
          this.articleList.map(v => {
            v.time = getFormatDate(v.time);
            //cutContent 为文章前90个字符，保留content原文章以便后续编辑使用
            v.cutContent = cutString(v.content, 90);
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取文章总数量
    _getArticleCount() {
      getArticleCount()
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
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 96%;
  text-align: right;
  padding: 10px;
  margin-right: 20px;
}
.articleMan {
  width: 87.5%;
  overflow-y: scroll;
  height: calc(100vh - 50px);
}
</style>
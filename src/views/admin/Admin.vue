<template>
  <div class="Admin">
    <el-col :span="3">
      <el-menu
        default-active="articleManagement"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="articleManagement">
          <i class="el-icon-document"></i>
          <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="commentManagment">
          <i class="el-icon-s-comment"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="messageManagment">
          <i class="el-icon-chat-line-square"></i>
          <span slot="title">留言管理</span>
        </el-menu-item>
        <el-menu-item index="timelineManagment">
          <i class="el-icon-time"></i>
          <span slot="title">时光轴管理</span>
        </el-menu-item>
        <el-menu-item index="linkManagment">
          <i class="el-icon-link"></i>
          <span slot="title">友链管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div class="header-nav">
      <div class="left">欢迎来到rinbowli博客后台管理系统</div>
      <div class="right">
        欢迎你，{{$store.state.username}}
        <span class="logout" @click="logout()">
          登出
          <i class="iconfont icon-tuichudenglu"></i>
        </span>
      </div>
    </div>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import { MessageBox } from "element-ui";
import { removeToken } from "@/utils/auth";
export default {
  name: "admin",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handSelect(key, keyPath) {
      //跳转对应的子路由
      this.$router.push("/admin/" + key);
    },
    logout() {
      MessageBox.confirm("你确定要退出登录吗？", "确认退出登录", {
        confirmButtonText: "退出登录",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeToken();
          location.reload();
        })
        .catch(err => {
          console.log("取消退出登录");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.Admin {
  overflow: hidden;
}
.el-col .el-menu {
  height: 100%;
  min-height: 100vh;
  border-right: none;
  overflow: hidden;
}
.header-nav {
  height: 50px;
  color: #ffffff;
  background-color: #545c64;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .right {
    .logout {
      color: #87ceff;
      cursor: pointer;
    }
  }
}
.router-view {
  margin-left: 12.5%;
}
</style>
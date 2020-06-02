<template>
  <div class="Admin">
    <el-col :span="3">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item  index="1">
          <i class="el-icon-document"></i>
          <span slot="title">文章管理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-comment"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-chat-line-square"></i>
          <span slot="title">留言管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-time"></i>
          <span slot="title">时光轴管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-link"></i>
          <span slot="title">友链管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "admin",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-col .el-menu {
  height: 100vh;
}
</style>
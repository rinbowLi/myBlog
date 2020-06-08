<template>
  <footer id="foot" role="contentinfo">
    <p>
      Copyright © {{curYear}} RinbowLi All Rights Reserved
      <a
        href="http://www.beian.miit.gov.cn"
        target="_blank"
      >赣ICP备20002776号</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "foot",
  computed: {
    curYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
</style>
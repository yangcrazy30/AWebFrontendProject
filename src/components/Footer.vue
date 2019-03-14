<template>
  <div class="container-fluid footer">

    <div class="footer-span">
      <span>主办单位：江苏风景园林协会</span>
      <span>江苏风景园林协会版权所有</span>
      <span>苏ICP备XXXXXXXXX号</span>
    </div>
    <div>
      <span >地址：江苏省南京市鼓楼区XXXX号</span>
      <span >电话：025-88888888</span>
      <span >传真：025-88888888</span>
      <span >邮箱：025-88888888</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .container-fluid {
    background: #f0f2f5
  }

  .myinfo {
    padding: 10px 0px;
  }

  .footer {
    padding: 20px 0px;
  }

  span{
    margin: 0.5em;
  }
</style>

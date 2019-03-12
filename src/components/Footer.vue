<template>
  <div class="container-fluid footer">
    <div class="row">
      <div class="col-xs-12 col-sm-4 myinfo">主办单位：江苏风景园林协会</div>
      <div class="col-xs-12 col-sm-4 myinfo">江苏风景园林协会版权所有</div>
      <div class="col-xs-12 col-sm-4 myinfo">苏ICP备XXXXXXXXX号</div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-3 myinfo">地址：江苏省南京市鼓楼区XXXX号</div>
      <div class="col-xs-12 col-sm-3 myinfo">电话：025-88888888</div>
      <div class="col-xs-12 col-sm-3 myinfo">传真：025-88888888</div>
      <div class="col-xs-12 col-sm-3 myinfo">邮箱：025-88888888</div>
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
</style>

<template>
    <div class="header" :style="bgStyle">
      <div class="fill">
        <img :src="logoUrl" />
      </div>
      <nav class="navbar navbar-default mynav">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">江苏风景园林</a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li role="presentation" data-toggle="pill" class="active"><a href="/">首页</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">协会介绍</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">协会活动</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">行业资讯</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">政策法规</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">风景园林</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">市县动态</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">企业信息</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">培训竞赛</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">专家库</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">园林论坛</a></li>
              <li role="presentation" data-toggle="pill"><a href="#">人才库</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
      name: "Header",
      data() {
        return {
          bgStyle: {
            backgroundImage: "url(" + require("../assets/header-bg.jpg") + ") ",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
          logoUrl: require("../assets/logo.png"),
        }
      }
    }
</script>

<style scoped>
  .header {
    min-height: 200px;
    text-align: left;
  }
  .fill {
    height: 180px;
  }
  @media (min-width: 768px) {
    .header {
      min-height: 520px;
    }
    .fill {
      height: 500px;
    }
    .mynav {
      position: relative;
      bottom: 0px;
    }
  }
</style>

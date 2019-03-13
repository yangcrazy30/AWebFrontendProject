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
            <router-link class="navbar-brand" to="/">江苏风景园林</router-link>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li role="presentation" data-toggle="pill" class="active"><router-link to="/">首页</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/intro">协会介绍</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/activity">协会活动</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/info">行业资讯</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/rule">政策法规</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/garden">风景园林</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/county">市县动态</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/enterprise">企业信息</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/trainingcompetition">培训竞赛</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/expertlibray">专家库</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/gardenforum">园林论坛</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/hr">人才库</router-link></li>
              <li role="presentation" data-toggle="pill"><router-link to="/associationpublication">协会刊物</router-link></li>
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

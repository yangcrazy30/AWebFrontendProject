<template>
  <div style="position: relative;">
    <div class="header" :style="bgStyle">
    </div>
    <img :src="logoUrl" class="logo">
  <nav class="navbar navbar-default mynav ">
    <div class="container-fluid" style="background: rgb(51,120,31);">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- <router-link class="navbar-brand" to="/">江苏风景园林</router-link> -->
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav nav-center">
          <li role="presentation" data-toggle="pill" class="active">
            <router-link to="/">首页</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/intro">协会介绍</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/activity">协会活动</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/info">行业资讯</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/rule">政策法规</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/garden">风景园林</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/county">市县动态</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/enterprise">企业信息</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/trainingcompetition">培训竞赛</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/expertlibray">专家库</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/gardenforum">园林科技</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/hr">人才库</router-link>
          </li>
          <li role="presentation" data-toggle="pill">
            <router-link to="/associationpublication">协会刊物</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
  import axios from '@/axios'
export default {
  name: "Header",
  data() {
    return {
      bgStyle: {
        backgroundImage: "url(" + require("../assets/header-bg.jpg") + ") ",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      },
      logoUrl: require("../assets/logo.png")
    };
  },
  created: function () {
    axios.get("http://jsfjyl.org.cn/kb_sModel/MainServlet?method=getBanner").then(response => {
      // todo
      this.bgStyle.backgroundImage = 'url(' + response.data[0].img + ')'
    })
  }
};
</script>

<style scoped>

  .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover{
  background: rgb(139, 206, 0);
}

#bs-example-navbar-collapse-1{
  background: rgb(51,120,31);
}

li a{
  color: white !important;
}

li{
  float: none;
  display: inline-block;
}

.nav-center {
  float: none;
  text-align: center;
  display: flex;
  justify-content: center;
}

.header {
  min-height: 500px;
  text-align: left;
  background: rgb(51,120,31);
  border: none;

}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 400px;
  width: auto;
}

.mynav {
  border: none;
}

@media (max-width: 768px) {
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    margin: 10px 0;
  }

  .nav-center {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .header {
    min-height: 220px;
      background: rgb(51,120,31);
      border: none;
  }
  .navbar-nav>li {
    width: 90px;
    display: block;
  }

  .fill {
    height: 200px;
  }
  .mynav {
    position: relative;
    bottom: 0px;
    border: none;
  }
}
</style>

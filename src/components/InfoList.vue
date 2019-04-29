<template>
  <div class="container-fluid">
    <div class="row" v-if="title">
      <div class="col-xs-6 a-left">
        <strong class="text-left">{{title}}</strong>
      </div>
      <div class="col-xs-6 a-right">
        <button type="button" class="btn btn-success btn-sm" @click="handleClick">更多</button>
      </div>
    </div>
    <div class="row" v-for="info in infos">
      <div v-if="!title && info.time" class="col-md-12 col-lg-12 col-xs-12 content">
        <router-link class="col-xs-8 overflow" :to="path + '/page?detailHtml='+info.head">{{info.title}}</router-link>
         <span  class="col-xs-4 a-right overflow">[{{info.time}}]</span>
      </div>
      <div v-else class="col-md-12 col-lg-12 col-xs-12 content">
        <router-link class="col-sm-12 overflow" :to="path + '/page?detailHtml='+info.head">{{info.title}}</router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    getmore: function() {
      console.log("more");
    },
    handleClick: function () {
      switch (this.title) {
        case '通知公告':
          this.$router.push('/notice')
          break;
        case '会员介绍':
          this.$router.push('/members')
          break;
        case '协会刊物':
          this.$router.push('/associationpublication')
          break;
        case '江苏公园湿地':
          this.$router.push('/garden/wetland')
          break;
        case '江苏风景名胜':
          this.$router.push('/garden/famous')
          break;
        case '行业资讯':
          this.$router.push('/info')
          break;
      }
    }
  },
  props: {
    title: String,
    infos: Array,
    path: {
      type: String,
      default: '.'
    }
  }
};
</script>


<style scoped>
.cle {
  clear: both;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
  color: #000;
  background-color: transparent;
}

a:link {
  color: #000;
}

a:visited {
}

a:focus {
}

a:hover {
  text-decoration: underline;
}

a:active {
  background: transparent;
  color: #000;
  text-decoration: underline;
}

.container-fluid {
  border-radius: 5px;
  /*border: 1px solid black;*/
  background: #f0f2f5;
  margin: 0.5em 0;
  min-height: 29em;
}

.content {
  text-align: left;
  margin: 0.2em;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}

.overflow {
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}

.a-left {
  text-align: left;
}

.a-right {
  text-align: right;
}
strong {
  float: left;
  margin: 0.5em;
  margin-top: 1em;
}

button {
  float: right;
  margin: 0.5em;
}
</style>



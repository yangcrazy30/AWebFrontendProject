<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-6 a-left">
        <strong class="text-left">{{title}}</strong>
      </div>
      <div class="col-xs-6 a-right">
        <button type="button" class="btn btn-success btn-sm" @click="handleClick">更多</button>
      </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-3 imageshow" v-for="image in images">
            <TheImage :head="image.head"  :description="image.description" :url="image.url"></TheImage>
        </div>
    </div>
  </div>
</template>

<script>
import TheImage from '../components/TheImage'
export default {
  data() {
    return {
        test:['1','2','3','4'],
        temp:'dada',
    };
  },
  props: {
    title: String,
    images: Array
  },
  components: {
      TheImage
  },
  methods: {
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
  }
};
</script>

<style scoped>



  .a-left {
    text-align: left;
  }

  .a-right {
    text-align: right;
  }
strong {
  float: left;
  margin-top: 1em;
}

button {
  float: right;
  margin-top: 0.5em;
}

.cle {
  clear: both;
}

.container-fluid{
    border-radius: 5px;
    /*border: 1px solid black;*/
  background: #f0f2f5;
  margin: 0.5em 0;
  min-height: 10em;
}

.imageshow{
  margin: 0;
  padding: 0;
}
</style>




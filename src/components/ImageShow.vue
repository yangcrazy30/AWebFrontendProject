<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-6 a-left">
        <strong class="text-left">{{title}}</strong>
      </div>
      <div class="col-xs-6 a-right">
        <button type="button" class="btn btn-success btn-sm">更多</button>
      </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-3 imageshow" v-for="image in images">
            <TheImage  :description="image.description" :url="image.url"></TheImage>
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
  margin: 0.5em;
  margin-top: 1em;
}

button {
  float: right;
  margin: 0.5em;
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




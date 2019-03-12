<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-lg-9 col-xs-12">
        <strong class="text-left">{{title}}</strong>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12">
        <button type="button" class="btn btn-success btn-sm">更多</button>
      </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-lg-3 col-xs-6" v-for="i in test">
            <TheImage  :description="i"></TheImage>
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

.container{
    width: 50%;
    border-radius: 5px;
    border: 1px solid black;
}

.imageshow{
    margin-bottom: 1em;
}
</style>




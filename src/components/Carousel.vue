<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style="margin:0.5em">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li v-for="(image,index) in images" data-target="#carousel-example-generic" :data-slide-to="index">0</li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox" style="width: 100%;">
      <div v-for="(image,index) in images" class="item photo-bg" :class="{active: index==0}" style="width: 100%;">
        <!--<img :src="image.url" :alt="image.alt" />-->
        <div class="photo-bg" :style="{backgroundImage: 'url(' + image.url + ')' }" style="width: 100%;"></div>
        <div class="carousel-caption">
          <router-link :to="'/page?detailHtml='+image.head" style="color: #fff;">{{image.description}}</router-link>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
    export default {
      name: "Carousel",
      props: {
        images: Array,
      }
    }
</script>

<style scoped>
  .carousel-inner {
    height: 29em;
    width: 100%;
    overflow: hidden;
  }
  .photo-bg {
    height: 100%;
    -webkit-background-size: contain;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .carousel-caption {
    background-color: rgba(0,0,0,0.5);
  }
</style>

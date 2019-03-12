<template>
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li v-for="(image,index) in images" data-target="#carousel-example-generic" :data-slide-to="index">0</li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div v-for="(image,index) in images" class="item" :class="{active: index==0}">
        <img :src="image.url" :alt="image.alt" />
        <div class="carousel-caption">
          {{image.description}}
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
        images: Array
      }
    }
</script>

<style scoped>
  .carousel {
    height: 20em;
    overflow: hidden;
  }
</style>

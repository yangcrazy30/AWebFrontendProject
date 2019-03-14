<template>
  <div class="contain outer-contain">
    <ol class="breadcrumb">
      <li v-for="breadCrumb in breadCrumbs"><router-link :to="breadCrumb.meta.path">{{breadCrumb.meta.name}}</router-link></li>
    </ol>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: "Content",
      mounted: function() {
        console.log(this.$route)
        this.breadCrumbs = this.$route.matched
      },
      updated: function() {
        this.breadCrumbs = this.$route.matched
      },
      data() {
        return {
          breadCrumbs: []
        }
      },

    }
</script>

<style scoped>
  .breadcrumb {
    text-align: left;
  }


  .outer-contain{
    min-height: 100vh;
    margin: auto 10%;
  }

  @media   (max-width: 768px) {
    .outer-contain{
      min-height: 100vh;
      margin: 0;
    }
  }

  
</style>

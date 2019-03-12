<template>
  <div>
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
</style>

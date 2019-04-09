<template>
  <div class="contain outer-contain">
    <ol class="breadcrumb" v-if="show">
      <li v-for="breadCrumb in breadCrumbs">
        <router-link :to="breadCrumb.meta.path">{{breadCrumb.meta.name}}</router-link>
      </li>
    </ol>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
  mounted: function() {
    // console.log(this.$route)
    this.breadCrumbs = this.$route.matched;
  },
  beforeUpdate() {
    if (this.$route.path == "/") {
      this.show = false;
      console.log(this.show);
    } else {
      this.show = true;
    }
  },
  updated: function() {
    this.breadCrumbs = this.$route.matched;
  },
  data() {
    return {
      breadCrumbs: [],
      show: true
    };
  },
  methods: {
    getpath: function() {
      console.log(this.$route.params.path);
    }
  }
};
</script>

<style scoped>
.breadcrumb {
  text-align: left;
}

.outer-contain {
  min-height: 100vh;
  margin: auto 10%;
}

.breadcrumb a {
  color: rgb(70,170,31);
}

@media (max-width: 768px) {
  .outer-contain {
    min-height: 100vh;
    margin: 0;
  }
}
</style>

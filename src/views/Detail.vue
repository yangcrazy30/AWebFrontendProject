<template>
  <div class="contain">
    <aside>
      <nav class="navbar navbar-default mynav">
        <ul class="nav nav-pills nav-stacked">
          <li v-for="(menu, index) in menus" role="presentation" data-toggle="pill">
            <router-link :to="menu.url">{{menu.title}}</router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <section>
      <div class="head">
        <router-view></router-view>
      </div>
    </section>
    <div class="cle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    menus: Array
  },
  mounted() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  },
  methods: {

  }
};
</script>

<style scoped>
aside {
  min-height: 100vh;
  float: left;
  width: 20%;
}
section {
  height: 100%;
  float: right;
  width: 80%;
}

.cle {
  clear: both;
}

.head {
  /*min-height: 90vh;*/
}

.contain {
  height: 100%;
}

.navbar {
  height: 100vh;
}

.mynav {
  margin-right: 2em;
}

  .nav-pills>li>a {
    color: rgb(51,120,31);
  }

.nav-pills>li.active>a, .nav-pills>li.active>a:focus, .nav-pills>li.active>a:hover {
  background-color: rgb(70,170,31);
  color: #fff;
}
</style>


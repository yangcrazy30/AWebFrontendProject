<template>
  <div class="contain">
    <aside>
      <nav class="navbar navbar-default mynav">
      <ul class="nav nav-pills nav-stacked">
        <li v-for="(menu, index) in menus" role="presentation" data-toggle="pill" >
          <router-link :to="menu.url">{{menu.title}}</router-link>
        </li>
      </ul>
      </nav>
    </aside>

    <section>
      <div class="head">
          <router-view></router-view>
      </div>
      <footer>
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
    <div class="cle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    menus: Array,
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

footer {
  min-height: 10vh;
}

.cle {
  clear: both;
}

.head{
    min-height: 90vh;
}

.contain{
    height: 100%;
}

  .navbar {
    height: 100vh;
  }
</style>


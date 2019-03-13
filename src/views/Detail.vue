<template>
  <div class="contain">
    <aside>
      <ul class="nav nav-pills nav-stacked">
        <li role="presentation" class="active">
          <a href="#">Home</a>
        </li>
        <li role="presentation">
          <a href="#">Profile</a>
        </li>
        <li role="presentation">
          <a href="#">Messages</a>
        </li>
      </ul>
    </aside>

    <section>
      <div class="head">
          <p>hhhhhh</p>
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
    return {};
  }
};
</script>

<style scoped>
aside {
  min-height: 100vh;
  background: peru;
  float: left;
  width: 20%;
}
section {
  height: 100%;
  background: blueviolet;
  float: right;
  width: 80%;
}

footer {
  background: pink;
  min-height: 10vh;
}

.cle {
  clear: both;
}

.head{
    min-height: 90vh;
    background: yellow;
}

.contain{
    height: 100%;
}
</style>


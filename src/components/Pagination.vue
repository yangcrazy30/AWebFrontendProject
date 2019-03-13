<template>
  <footer>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li @click="handleClick(currentPage-1<1?1:currentPage-1)">
          <a aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in pages" @click="handleClick(page)"><a>{{page}}</a></li>
        <li @click="handleClick(currentPage+1>count/limit+1?count/limit+1:currentPage+1)">
          <a aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
  export default {
    name: "Pagination",
    data() {
      return {
        pages: []
      }
    },
    props: {
      currentPage: Number,
      count: Number,
      limit: {type: Number, default: 10}
    },
    created() {
      for (let i=0;i<this.count/this.limit+1&&i<5;i++) {
        this.pages[i] = i+this.currentPage
      }
    },
    methods: {
      handleClick: function (page) {
        this.$emit('changePage', page)
      }
    }
  }
</script>

<style scoped>

</style>

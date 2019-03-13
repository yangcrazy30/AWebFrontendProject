<template>
  <div>
    <InfoList :infos="infos" style="background: #fff;"></InfoList>
    <Pagination :currentPage="page" :count="count" @changePage="handleChangePage"></Pagination>
  </div>
</template>

<script>
import InfoList from "@/components/InfoList";
import Pagination from "@/components/Pagination";
import axios from "@/axios";
export default {
  name: "ListView",
  data() {
    return {
      infos: [],
      count: 0,
      page: 1,
      limit: 10
    };
  },
  props: {
    method: String,
    type: String,
    isClicked: Boolean
  },
  methods: {
    handleChangePage: function(page) {
      this.page = page;
      if (this.type && this.type != "") {
        axios
          .get("", {
            params: {
              method: this.method,
              type: this.type,
              limit: this.limit,
              page: this.page
            }
          })
          .then(res => {
            this.count = res.count;
            this.infos = res.data.map(current => {
              return {
                head: current.detailHtml,
                title: current.Title,
                time: current.date
              };
            });
          });
      } else {
        axios
          .get("", {
            params: { method: this.method, limit: this.limit, page: this.page }
          })
          .then(res => {
            this.count = res.count;
            this.infos = res.data.map(current => {
              return {
                head: current.detailHtml,
                title: current.Title,
                time: current.date
              };
            });
          });
      }
    }
  },
  watch: {
    type: function() {
      if (this.type && this.type != "") {
        axios
          .get("", {
            params: {
              method: this.method,
              type: this.type,
              limit: this.limit,
              page: this.page
            }
          })
          .then(res => {
            this.count = res.count;
            this.infos = res.data.map(current => {
              return {
                head: current.detailHtml,
                title: current.Title,
                time: current.date
              };
            });
          });
      } else {
        axios
          .get("", {
            params: { method: this.method, limit: this.limit, page: this.page }
          })
          .then(res => {
            this.count = res.count;
            this.infos = res.data.map(current => {
              return {
                head: current.detailHtml,
                title: current.Title,
                time: current.date
              };
            });
          });
      }
    }
  },
  created: function() {
    if (this.$route.query.keyword && this.$route.query != "") {
      axios
        .get("", {
          params: {
            method: this.method,
            keyword: this.$route.query.keyword,
            limit: this.limit,
            page: this.page
          }
        })
        .then(res => {
          this.count = res.count;
          this.infos = res.data.map(current => {
            return {
              head: current.detailHtml,
              title: current.Title,
              time: current.date
            };
          });
        });
    } else {
      if (this.type && this.type != "") {
        axios
          .get("", {
            params: {
              method: this.method,
              type: this.type,
              limit: this.limit,
              page: this.page
            }
          })
          .then(res => {
            this.count = res.count;
            this.infos = res.data.map(current => {
              return {
                head: current.detailHtml,
                title: current.Title,
                time: current.date
              };
            });
          });
      } else {
        axios
          .get("", {
            params: { method: this.method, limit: this.limit, page: this.page }
          })
          .then(res => {
            this.count = res.count;
            this.infos = res.data.map(current => {
              return {
                head: current.detailHtml,
                title: current.Title,
                time: current.date
              };
            });
          });
      }
    }
  },
  components: {
    InfoList,
    Pagination
  }
};
</script>

<style scoped>
</style>

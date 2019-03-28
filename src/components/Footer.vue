<template>
  <div class="container-fluid footer">
    <div class="footer-span">
      <span>{{first}}</span>
    </div>
    <div>
      <span>{{second}}</span>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  name: "Footer",
  data() {
    return {
      first: "",
      second: ""
    };
  },
  mounted() {
    axios
      .get("", {
        params: {
          method: 'getRelation',
          limit: 2,
          page: 1
        }
      })
      .then(res => {
        this.count = res.count;
        this.first = res.data[0].first;
        this.second=res.data[0].second;
      });
  }
};
</script>

<style scoped>
.container-fluid {
  background: #f0f2f5;
}

.myinfo {
  padding: 10px 0px;
}

.footer {
  padding: 20px 0px;
}

span {
  margin: 0.5em;
}
</style>

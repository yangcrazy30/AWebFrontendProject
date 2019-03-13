<template>
  <div class="container-fluid">
    <div class="row" v-if="title">
      <div class="col-xs-6 a-left">
        <strong class="text-left">{{title}}</strong>
      </div>
      <div class="col-xs-6 a-right">
        <button type="button" class="btn btn-success btn-sm">更多</button>
      </div>
    </div>
    <div class="row" v-for="info in infos">
      <div class="col-md-12 col-lg-12 col-xs-12 content">
        <a class="col-sm-8 overflow" :href="info.head">{{info.title}}</a>
        <span class="col-sm-4 a-right">[{{info.time}}]</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    getmore: function() {
      console.log("more");
    }
  },
  props: {
    title: String,
    infos: Array,
  }
};
</script>


<style scoped>
.cle {
  clear: both;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437a16;
}

a:focus {
  background: #bae498;
}

a:hover {
  background: #cdfeaa;
}

a:active {
  background: #265301;
  color: #cdfeaa;
}

.container-fluid {
  border-radius: 5px;
  /*border: 1px solid black;*/
  background: #f0f2f5;
  margin: 0.5em;
}

.content {
  text-align: left;
  margin: 0.2em;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}

.overflow {
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}

.a-left {
  text-align: left;
}

.a-right {
  text-align: right;
}
strong {
  float: left;
  margin: 0.5em;
  margin-top: 1em;
}

button {
  float: right;
  margin: 0.5em;
}
</style>



<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-lg-9 col-xs-12">
        <strong class="text-left">{{title}}</strong>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-12">
        <button type="button" class="btn btn-success btn-sm">更多</button>
      </div>
    </div>
    <div class="row" v-for="info in infos">
      <div class="col-md-12 col-lg-12 col-xs-12 content">
        <a href="info.head">{{info}}</a>
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
    infos: Array
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

.container {
  border-radius: 5px;
  border: 1px solid black;
  width: 25%;
}

.content {
  text-align: left;
  margin: 0.2em;
}

@media (min-width: 992px) {
  button {
    float: right;
    margin: 0.5em;
  }

  strong {
    float: left;
    margin: 0.5em;
    margin-top: 1em;
  }
}
</style>



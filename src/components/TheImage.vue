<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-xs-12 col=lg-12 col-md-12 imageshow">
              <router-link :to="'/page?detailHtml='+head">
                <img :src="url" alt=""  class="img-thumbnail imagecontainer">
              </router-link>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-12 col-md-12 col-xs-12">
            <router-link :to="'/page?detailHtml='+head">
              <p>{{description}}</p>
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: {
        description:String,
        url:String,
        head: String,
    }
};
</script>

<style scoped>
.container{
    margin-bottom: 1.5em;
}

.container-fluid {
  margin: 0;
}

.imagecontainer{
    margin-top: 0em;
}

.imageshow{
    margin: 0;
    padding: 5px;
}
</style>



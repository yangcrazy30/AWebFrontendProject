<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-xs-12 col=lg-12 col-md-12">
              <img src="../assets/logo.png" alt=""  class="img-thumbnail imagecontainer">
          </div>
      </div>
      <div class="row">
          <div class="col-lg-12 col-md-12 col-xs-12">
              <p>{{description}}</p>
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
        url:String
    }
};
</script>

<style scoped>
.container{
    margin-bottom: 1.5em;
}

.imagecontainer{
    margin-top: 1.5em;
}
</style>



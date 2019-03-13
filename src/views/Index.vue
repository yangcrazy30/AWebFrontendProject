<template>
    <div>
      <!--upper part-->
      <div class="row">
        <div class="col-sm-4 col-sm-offset-8">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <Carousel :images="images"></Carousel>
        </div>
        <div class="col-sm-6">
          <InfoList :infos="infos"></InfoList>
        </div>
      </div>

      <!--bottom part-->
      <div class="row">
        <div class="col-sm-3">
          <div class="row">
            <div class="col-sm-12">
              <InfoList title="Title" :infos="infos"></InfoList>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <InfoList title="Title" :infos="infos"></InfoList>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12">
              <ImageShow title="Test" :images="images"></ImageShow>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <ImageShow title="Test" :images="images"></ImageShow>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <ImageShow title="Test" :images="images"></ImageShow>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="row">
            <div class="col-sm-12">
              <InfoList title="Title" :infos="infos"></InfoList>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <InfoList title="Title" :infos="infos"></InfoList>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import ImageShow from '@/components/ImageShow'
  import InfoList from '@/components/InfoList'
  import Carousel from '@/components/Carousel'
  export default {
    name: "Index",
    components: {
      ImageShow,
      InfoList,
      Carousel,
    },
    data() {
      return {
        images: [
          {
            url: require('../assets/header-bg.jpg'),
            description: 'Description'
          },
          {
            url: require('../assets/header-bg.jpg'),
            description: 'Description'
          },
          {
            url: require('../assets/header-bg.jpg'),
            description: 'Description'
          },
          {
            url: require('../assets/logo.png'),
            description: 'Description'
          },
        ],
        infos: [
          {
            head: 'http:www.baidu.com',
            title: '关于表彰学会先进集体和先进工作者的决定',
            time: '3月12日'
          },
          {
            head: 'http:www.baidu.com',
            title: '关于表彰学会先进集体和先进工作者的决定',
            time: '3月12日'
          },
          {
            head: 'http:www.baidu.com',
            title: '关于表彰学会先进集体和先进工作者的决定',
            time: '3月12日'
          },
          {
            head: 'http:www.baidu.com',
            title: '关于表彰学会先进集体和先进工作者的决定',
            time: '3月12日'
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>

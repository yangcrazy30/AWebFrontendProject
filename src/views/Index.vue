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
  export default {
    name: "Index",
    components: {
      ImageShow,
      InfoList,
    },
    data() {
      return {
        images: [
          {
            url: require('../assets/logo.png'),
            description: 'Description'
          },
          {
            url: require('../assets/logo.png'),
            description: 'Description'
          },
          {
            url: require('../assets/logo.png'),
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
            title: 'Title'
          },
          {
            head: 'http:www.baidu.com',
            title: 'Title'
          },
          {
            head: 'http:www.baidu.com',
            title: 'Title'
          },
          {
            head: 'http:www.baidu.com',
            title: 'Title'
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>

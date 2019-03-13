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
        <div class="col-sm-4">
          <Carousel :images="activities"></Carousel>
        </div>
        <div class="col-sm-6">
          <InfoList :infos="files"></InfoList>
        </div>
      </div>

      <!--bottom part-->
      <div class="row">
        <div class="col-sm-3">
          <div class="row">
            <div class="col-sm-12">
              <InfoList title="通知公告" :infos="announcement"></InfoList>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <InfoList title="会员介绍" :infos="members"></InfoList>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12">
              <ImageShow title="协会刊物" :images="magazines"></ImageShow>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <ImageShow title="江苏公园湿地" :images="wetland"></ImageShow>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <ImageShow title="江苏风景名胜" :images="famous"></ImageShow>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="row">
            <div class="col-sm-12">
              <InfoList title="行业资讯" :infos="infos"></InfoList>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <InfoList title="会员之家" :infos="infos"></InfoList>
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
  import axios from '@/axios'
  export default {
    name: "Index",
    components: {
      ImageShow,
      InfoList,
      Carousel,
    },
    data() {
      return {
        activities: [],
        magazines: [],
        wetland:[],
        famous: [],
        files: [],
        announcement: [],
        members: [],
        infos: [],
      }
    },
    created: function () {
      axios.get('', {params: {method: 'getImgTexts', type: '图文活动', page: '1', limit: '5'}})
        .then((response) => {
          this.activities = response.data.map((current) => {
            return {
              url: current.img,
              description: current.Title,
            }
          })
        })

      axios.get('', {params: {method: 'getInfos', type: '协会文件', page: '1', limit: '9'}})
        .then((response) => {
          this.files = response.data.map((current) => {
            return {
              head: current.detailHtml,
              title: current.Title,
              time: current.date
            }
          })
        })

      axios.get('', {params: {method: 'getInfos', type: '协会公告', page: '1', limit: '7'}})
        .then((response) => {
          this.announcement = response.data.map((current) => {
            return {
              head: current.detailHtml,
              title: current.Title,
              time: current.date
            }
          })
        })

      // TODO
      axios.get('', {params: {method: 'getMembers', page: '1', limit: '8'}})
        .then((response) => {
          this.members = response.data.map((current) => {
            return {
              head: current.detailHtml,
              title: current.Title,
              time: current.date
            }
          })
        })

      axios.get('', {params: {method: 'getInfos', type: '本省资讯', page: '1', limit: '8'}})
        .then((response) => {
          this.infos = response.data.map((current) => {
            return {
              head: current.detailHtml,
              title: current.Title,
              time: current.date
            }
          })
        })

      axios.get('', {params: {method: 'getImgTexts', type: '协会刊物', page: '1', limit: '4'}})
        .then((response) => {
          this.magazines = response.data.map((current) => {
            return {
              description: current.Title,
              url: current.img
            }
          })
        })

      axios.get('', {params: {method: 'getImgTexts', type: '公园湿地', page: '1', limit: '4'}})
        .then((response) => {
          this.wetland = response.data.map((current) => {
            return {
              description: current.Title,
              url: current.img
            }
          })
        })

      axios.get('', {params: {method: 'getImgTexts', type: '风景名胜', page: '1', limit: '4'}})
        .then((response) => {
          this.famous = response.data.map((current) => {
            return {
              description: current.Title,
              url: current.img
            }
          })
        })
    }
  }
</script>

<style scoped>

</style>

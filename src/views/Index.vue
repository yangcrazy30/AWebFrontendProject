<template>
    <div>
      <!--upper part-->
      <div class="row">
        <div class="col-sm-4 col-sm-offset-8">
          <div class="input-group">
            <input type="text" class="form-control" v-model="searchinput" placeholder="Search for..." />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click="Search">Go!</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
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
              <InfoList title="会员介绍" :infos="members" style="min-height: 15em"></InfoList>
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
          <div style="display: flex; flex-direction: column; padding: 0 10px;">
            <div style="display: flex; flex-direction: row; justify-content: space-between; margin: 0.3em 0;">
              <div><router-link :to="'/page?detailHtml='+vipKnow"><img :src="require('../assets/vipKnown.png')"></router-link></div>
              <div><a href="http://211.149.129.88/GardensTrain/index.html"><img :src="require('../assets/trainApply.png')"></a></div>
            </div>
            <div style="width: 100%; display: flex; flex-direction: row; justify-content: space-around; margin: 0.3em 0;">
              <div style="width: 100%;"><a href="http://211.149.129.88/yuanlin/login.jsp"><img style="width: 100%;" :src="require('../assets/adminLogin.png')"></a></div>
            </div>
            <div style="width: 100%; display: flex; flex-direction: row; justify-content: space-around; margin: 0.3em 0;">
              <div style="width: 100%;"><a href="http://211.149.129.88/shopModule1/login.jsp"><img style="width: 100%;" :src="require('../assets/expertLogin.png')"></a></div>
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
        searchinput:'',
        vipKnow: ''
      }
    },
    methods: {
      Search:function(){
        this.$router.push({name:'search',query:{keyword:this.searchinput}})
      }
    },
    created: function () {
      axios.get('', {params: {method: 'getImgTexts', type: '图文活动', page: '1', limit: '5'}})
        .then((response) => {
          this.activities = response.data.map((current) => {
            return {
              url: current.img,
              description: current.Title,
              head: current.detailHtml,
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
              url: current.img,
              head: current.detailHtml,
            }
          })
        })

      axios.get('', {params: {method: 'getImgTexts', type: '公园湿地', page: '1', limit: '4'}})
        .then((response) => {
          this.wetland = response.data.map((current) => {
            return {
              description: current.Title,
              url: current.img,
              head: current.detailHtml,
            }
          })
        })

      axios.get('', {params: {method: 'getImgTexts', type: '风景名胜', page: '1', limit: '4'}})
        .then((response) => {
          this.famous = response.data.map((current) => {
            return {
              description: current.Title,
              url: current.img,
              head: current.detailHtml,
            }
          })
        })

      axios.get('', {params: {method: 'getDocuments', type: '入会须知'}})
        .then((response) => {
          this.vipKnow = response.data[0].detailHtml
        })
    }
  }
</script>

<style scoped>

</style>

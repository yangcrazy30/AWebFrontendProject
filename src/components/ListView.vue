<template>
  <InfoList :infos="infos" style="background: #fff;"></InfoList>
</template>

<script>
  import InfoList from '@/components/InfoList'
  import axios from '@/axios'
    export default {
        name: "ListView",
      data() {
          return {
            infos: []
          }
      },
      props: {
        method: String,
        type: String,
        isClicked: Boolean,
      },
      watch: {
          type: function () {
            if (this.type && this.type != '') {
              console.log('sed')
              axios.get('', {params: {method: this.method, type: this.type, limit: 10, page: 1}}).then((res) => {
                this.infos = res.data.map((current) => {
                  return {
                    head: current.detailHtml,
                    title: current.Title,
                    time: current.date
                  }
                })
              })
            } else {
              axios.get('', {params: {method: this.method, limit: 10, page: 1}}).then((res) => {
                this.infos = res.data.map((current) => {
                  return {
                    head: current.detailHtml,
                    title: current.Title,
                    time: current.date
                  }
                })
              })
            }
          }
      },
      created: function () {
        if (this.type && this.type != '') {
          console.log('sed')
          axios.get('', {params: {method: this.method, type: this.type, limit: 10, page: 1}}).then((res) => {
            this.infos = res.data.map((current) => {
              return {
                head: current.detailHtml,
                title: current.Title,
                time: current.date
              }
            })
          })
        } else {
          console.log(this.method)
          axios.get('', {params: {method: this.method, limit: 10, page: 1}}).then((res) => {
            this.infos = res.data.map((current) => {
              return {
                head: current.detailHtml,
                title: current.Title,
                time: current.date
              }
            })
          })
        }
      },
      components: {
          InfoList
      }
    }
</script>

<style scoped>

</style>

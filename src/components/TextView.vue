<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
  import axios from '@/axios'
  import rawAxios from 'axios'

  export default {
    name: "TextView",
    data() {
      return {
        url:this.$route.query.detailHtml,
        html: '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>商品详情</title><style> img{width:700px;}</style></head><body><p style="text-align: center;"><img src="http://localhost:9090/static/img/logo.37e0733.png"><span style="font-size: 20px; font-family: 黑体, SimHei;"><strong>江苏省风景园林协会</strong></span><span style="font-family: 宋体, SimSun;"><strong style="““font-family:“">&nbsp;</strong></span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">江苏省风景园林协会成立于1989年，登记管理机关是江苏省民政厅，业务主管单位是江苏省住房和城乡建设厅。协会于2016年6月召开会员大会，选举产生了第六届理事会。协会在省住房和城乡建设厅、省民政厅的领导下，在全体会员单位的支持下，以协会章程为行为准则，紧紧围绕全省风景园林行业的中心工作，强化服务宗旨，求真务实，开拓创新，充分发挥其桥梁纽带作用，做了大量富有成效的工作，取得了显著成绩，为全省风景园林绿化事业健康发展做出了积极贡献。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">江苏省风景园林协会是江苏风景园林行业唯一的省级社会团体，成员涵盖了园林绿化、风景名胜、景观建设规划设计、建设维护、教学科研、运营管理等各方面的企事业和行政管理单位。目前，省协会有会员单位800余家。</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong>一、协会宗旨</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">协会遵守国家宪法、法律、法规和国家有关政策，遵守社会公德，组织和团结全省风景园林行业工作者，继承并发扬中国园林的优秀传统，加强国际间的交流与合作，吸收世界园林建设、管理先进经验；协助业务主管部门加强风景园林管理，提高全行业科学管理水平，促进城市园林绿化和风景名胜区建设；加强调查研究，密切风景园林间的联系，反映会员意见和建议；代表会员的利益，保护公园和风景名胜区，改善生态，美化环境，为人民群众提供休息和开展科学、文化活动的园地，促进人民身心健康，为加强社会主义物质文明和精神文明建设做出贡献。</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;"><strong>&nbsp;&nbsp;&nbsp;</strong>&nbsp;&nbsp;二、业务范围</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（一）宣传、贯彻、执行党和国家有关风景名胜、园林绿化的方针、政策和法律、法规和规章；</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（二）协助政府制定与贯彻实施风景园林绿化的技术标准和规范，开展课题研究，提出促进风景园林绿化事业发展的政策建议；</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（三）开展风景园林绿化的理论研究和学术研讨，组织业务培训，提高会员的业务素质和管理水平；</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（四）协助政府部门开展风景名胜区、城市公园、城市绿地等到行业管理工作，承担行业内协调、服务工作，开展业务咨询和科技服务活动；</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（五）开展国际和国内学术交流和友好交往活动；</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（六）组织拟订行规行约，行业秩序；</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（七）沟通信息，编辑出版协会刊物或汇编学术资料；</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（八）承办风景园林行业主管部门及其他社会团体委托事项，开展促进本行业发展的其他活动。</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;"><strong>&nbsp;&nbsp;&nbsp;</strong>&nbsp;三、内设机构</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（一）工程建设及管理专业委员会</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（二）风景名胜区管理专业委员会</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（三）公园绿地专业委员会</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（四）园林植物专业委员会</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（五）花卉盆景赏石专业委员会</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（六）企业建设及管理专业委员会</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（七）设计专业委员会</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（八）专家委员会</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（九）协会秘书处、《江苏风景园林》编辑部</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong>四、协会近年来开展的活动</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（一）《江苏风景园林》—提供宣传、学习、交流平台</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">《江苏风景园林》由江苏省住房城乡建设厅主管、江苏省风景园林协会主办，是江苏省住房和城乡建设厅优秀期刊。《江苏风景园林》已经成为江苏风景园林对外展示的窗口、全省风景园林行业的交流平台和连接基层与政府的纽带，成为业内人员提高水平的指导书和实用教材。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（二）举办各类专业培训—提高行业人员专业素质</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">协会与有关院校合作办学，建立培训基地，每年组织绿化行业工人等级培训、专业技术人员培训、行业管理人员培训。同时，协会承接行业主管部门交办的培训任务，举办全省风景园林行业领导干部培训班。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">（三）专家咨询库—提供技术咨询和服务</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">协会建立协会专家咨询库，由在业内有影响的园林植物、园林施工、园林设计、行业管理等方面的专家50余人组成，为会员单位提供技术咨询和服务。</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;"><strong>&nbsp;&nbsp;&nbsp;</strong>（四）组织各类活动—提高行业科技影响力</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">1、组织江苏省优质工程奖“扬子杯”（园林）评选活动。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">2、举办青年设计师风景园林设计大赛。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">3、举办园林绿化工程优秀设计评比活动。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">4、举办江苏省绿化行业职业技能竞赛。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">5、组织会员单位外出考察学习。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">6、开展专题调研和座谈会。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">7、组织优秀论文的评选。</span></p><p style="“““““““text-indent:43px;line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">8、举办园林绿化企业沙龙活动。</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong>五、联系我们</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">&nbsp;&nbsp;&nbsp;&nbsp;联系人：张晓阳；</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">&nbsp;&nbsp;&nbsp;&nbsp;联系电话（传真）：025-86211159；</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">&nbsp;&nbsp;&nbsp;&nbsp;手机号码：13912988843；</span></p><p style="“““““““line-height:40px“““““““"><span style="font-family: 宋体, SimSun;">&nbsp;&nbsp;&nbsp;&nbsp;邮箱：</span><a href="“““““““mailto:11878715@qq.com“““““““" style="font-family: 宋体, SimSun; text-decoration: underline;"><span style="font-family: 宋体, SimSun;">11878715@qq.com</span></a><span style="font-family: 宋体, SimSun;">；</span></p><p><span style="font-family: 宋体, SimSun;">&nbsp;&nbsp;&nbsp;&nbsp;地址：南京市鼓楼区南通路世贸滨江5栋701室。</span></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p><p><br/></p></body></html>'
      }
    },
    props: {
      method: String,
      type: String,
      detailHtml: String
    },
    watch: {
      type: function () {
        if (this.method && this.type) {
          axios.get('', {params: {method: this.method, type: this.type}}).then((response) => {
            let temp = response.data[0].detailHtml.replace(/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/, 'jsfjyl.org.cn')
            rawAxios.get(temp).then((response) => {
              this.html = '<style> @media (max-width: 768px) {div img{width:100%;}}</style>'+response.data
            })
            //TODO
          })
        }
        if (this.url) {
          let temp = this.url.replace(/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/, 'jsfjyl.org.cn')
          rawAxios.get(temp).then((response)=>{
            this.html='<style> @media (max-width: 768px) {div img{width:100%;}}</style>'+response.data;
          })
        }
      }
    },
    mounted: function () {
      this.html = '<style> @media (max-width: 768px) {div img{width:100%;}}</style>' + this.html
      if (this.method && this.type) {
        axios.get('', {params: {method: this.method, type: this.type}}).then((response) => {
          let temp = response.data[0].detailHtml.replace(/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/, 'jsfjyl.org.cn')
          rawAxios.get(temp).then((response) => {
            this.html = '<style> @media (max-width: 768px) {div img{width:100%;}}</style>'+response.data
          })
          //TODO
        })
      }
      if (this.url) {
        let temp = this.url.replace(/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/, 'jsfjyl.org.cn')
        console.log(temp)
        rawAxios.get(temp).then((response)=>{
          this.html='<style> @media (max-width: 768px) {div img{width:100%;}}</style>'+response.data;
        })
      }

    }
  }
</script>

<style scoped>
  div {
    text-align: left;
    padding: 0 10%;
  }
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
</style>

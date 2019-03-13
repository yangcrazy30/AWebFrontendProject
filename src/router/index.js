import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import HelloWorld from '@/views/HelloWorld'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
import TextView from '@/components/TextView'
import ListView from '@/components/ListView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      name: '首页',
      path: '/'
    },
    children: [{
      path: '',
      name: 'Index',
      component: Index,
      meta: {
        name: '',
        path: '/'
      }
    },
      {
        path: '/test',
        name: 'test',
        component: HelloWorld,
        meta: {
          name: '测试',
          path: '/test'
        }
      },
      // {
      //   path: '/detail',
      //   name: 'detail',
      //   component: Detail,
      //   meta: {
      //     name: '详情',
      //     path: '/detail'
      //   }
      // },
      {
        path: '/intro',
        component: Detail,
        props: {
          menus: [
            {
              title: '协会简介',
              url: '/intro/brief'
            },
            {
              title: '协会章程',
              url: '/intro/rule',
            },
            {
              title: '专业委员会',
              url: '/intro/committee'
            },
            {
              title: '设区市协会',
              url: '/intro/district'
            }
          ]
        },
        meta: {
          name: '协会介绍',
          path: '/intro',
        },
        children: [
          {
            path: 'brief',
            component: TextView,
            props: {
              method: 'getDocuments',
              type: '协会简介'
            },
            meta: {
              name: '协会简介',
              path: '/intro/brief'
            }
          },
          {
            path: 'rule',
            component: TextView,
            meta: {
              name: '协会章程',
              path: '/intro/rule'
            }
          },
          {
            path: 'committee',
            component: TextView,
            meta: {
              name: '专业委员会',
              path: '/intro/committee'
            }
          },
          {
            path: 'district',
            component: TextView,
            meta: {
              name: '设区市协会',
              path: '/intro/district'
            }
          }
        ]
      },
      {
        path: '/activity',
        component: Detail,
        props: {
          menus: [
            {
              title: '图文活动',
              url: '/activity/imgtext'
            },
            {
              title: '协会文件',
              url: '/activity/document',
            },
            {
              title: '信息公开',
              url: '/activity/info'
            }
          ]
        },
        meta: {
          name: '协会活动',
          path: '/acticity'
        },
        children: [
          {
            path: 'imgtext',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '协会文件'
            },
            meta: {
              name: '图文活动',
              path: '/activity/imgtext'
            }
          },
          {
            path:'page',
            component:TextView,
            meta:{
              name:'文档',
              path:'./'
            }
          }
        ]
      },
      {
        path:'/trainingcompetition',
        component:Detail,
        props:{
          menus:[
            {
              title:'项目负责人培训',
              url:'/trainingcompetition/train'
            },
            {
              title:'设计竞赛',
              url:'/trainingcompetition/design'
            },
            {
              title:'技能竞赛',
              url:'/trainingcompetiton/skill'
            }
          ]
        },
        meta:{
          name:'培训竞赛',
          pathL:'/trainingcompetition'
        },
        children:[
          {
            path:'train',
            component:ListView,
            props:{
              method:'getInfos',
              type:'项目负责人培训'
            },
            meta:{
              name:'项目负责人培训',
              path:'/trainingcompetition/train'
            }
          },
          {
            path:'design',
            component:ListView,
            props:{
              method:'getInfos',
              type:'设计竞赛'
            },
            meta:{
              name:'设计竞赛',
              path:'/trainingcompetition/design'
            }
          },
          {
            path:'skill',
            component:ListView,
            props:{
              method:'getInfos',
              type:'技能竞赛'
            },
            meta:{
              name:'技能竞赛',
              path:'/trainingcompetition/skill'
            }
          },
          {
            path:'page',
            component:TextView,
            meta:{
              name:'文档',
              path:'./'
            }
          }

        ]
      },
      {
        path:'/expertlibray',
        component:Detail,
        props:{
          menus:[
            {
              title:'设计大师',
              url:'/expertlibray/designmaster'
            },
            {
              title:'知名专家',
              url:'/expertlibray/famousmaster'
            },
            {
              title:'古建园林营造匠师',
              url:'/expertlibray/gardenbuilder'
            }
          ]
        },
        meta:{
          name:'专家库',
          path:'/expertlibray'
        },
        children:[
          {
            path:'/expertlibray/designmaster',
            component:ListView,
            props:{
              method:'getInfos',
              type:'设计大师'
            },
            meta:{
              name:'设计大师',
              path:'/expertlibray/designmaster'
            }
          },
          {
            path:'/expertlibray/famousmaster',
            component:ListView,
            props:{
              method:'getInfos',
              type:'知名大师'
            },
            meta:{
              name:'知名大师',
              path:'/expertlibray/famousmaster'
            }
          },
          {
            path:'/expertlibray/gardenbuilder',
            component:ListView,
            props:{
              method:'getInfos',
              type:'古建园林营造匠师'
            },
            meta:{
              name:'古建园林营造匠师',
              path:'/expertlibray/gardenbuilder'
            }
          },
          {
            path:'page',
            component:TextView,
            meta:{
              name:'文档',
              path:'./'
            }
          }
        ]
      },
      {
        path:'/gardenforum',
        component:Detail,
        props:{
          menus:[
            {
              title:'理论动态',
              url:'/gardenforum/theoreticaldevelopment'
            },
            {
              title:'应用研究',
              url:'/gardenforum/appliedresearch'
            }
          ]
        },
        meta:{
          name:'园林论坛',
          path:'/gardenforum'
        },
        children:[
          {
            path:'/gardenforum/theoreticaldevelopment',
            component:ListView,
            props:{
              method:'getInfos',
              type:'理论动态'
            },
            meta:{
              name:'理论动态',
              path:'/gardenforum/theoreticaldevelopment'
            }
          },
          {
            path:'/gardenforum/appliedresearch',
            component:ListView,
            props:{
              method:'getInfos',
              type:'应用研究'
            },
            meta:{
              name:'应用研究',
              path:'/gardenforum/appliedresearch'
            }
          },
          {
            path:'page',
            component:TextView,
            meta:{
              name:'文档',
              path:'./'
            }
          }
        ]
      },
      {
        path:'/associationpublication',
        component:ListView,
        props:{
          menus:[
            {
              title:'江苏风景园林',
              url:'/associationpublication/jiangsu'
            }
          ]
        },
        meta:{
          name:'协会刊物',
          url:'/associationpublication'
        },
        children:[
          {
            path:'/associationpublication/jiangsu',
            component:ListView,
            props:{
              method:'getInfos',
              type:'协会刊物'
            },
            meta:{
              name:'江苏风景园林',
              path:'/associationpublication/jiangsu'
            },
          },
          {
            path:'page',
            component:TextView,
            mega:{
              name:'文档',
              path:'./'
            }
          }
        ]
      }
    ]
  }]
})

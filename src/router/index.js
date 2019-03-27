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
        path:'/page',
        component:TextView,
        meta:{
          name:'文档',
          path:'./'
        }
      },
      {
        path: '/intro',
        redirect: '/intro/brief',
        component: Detail,
        props: {
          menus: [{
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
        children: [{
            path: 'brief',
            component: TextView,
            props: {
              method: 'getDocuments',
              type: '协会简介'
            },
            meta: {
              name: '协会简介',
              path: '/intro/brief',
            }
          },
          {
            path: 'rule',
            component: TextView,
            props: {
              method: 'getDocuments',
              type: '协会章程',
            },
            meta: {
              name: '协会章程',
              path: '/intro/rule'
            }
          },
          {
            path: 'committee',
            component: TextView,
            props: {
              method: 'getDocuments',
              type: '专业委员会'
            },
            meta: {
              name: '专业委员会',
              path: '/intro/committee'
            }
          },
          {
            path: 'district',
            component: TextView,
            props: {
              method: 'getDocuments',
              type: '设区市协会'
            },
            meta: {
              name: '设区市协会',
              path: '/intro/district'
            }
          }
        ]
      },
      {
        path: '/activity',
        redirect: '/activity/imgtext',
        component: Detail,
        props: {
          menus: [{
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
        children: [{
            path: 'imgtext',
            component: ListView,
            props: {
              method: 'getImgTexts',
              type: '图文活动'
            },
            meta: {
              name: '图文活动',
              path: '/activity/imgtext'
            }
          },
          {
            path: 'document',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '协会文件'
            },
            meta: {
              name: '协会文件',
              path: '/activity/document'
            }
          },
          {
            path: 'info',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '信息公开'
            },
            meta: {
              name: '信息公开',
              path: '/activity/info'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path: '/info',
        redirect: '/info/local',
        component: Detail,
        props: {
          menus: [{
              title: '本省资讯',
              url: '/info/local'
            },
            {
              title: '外地资讯',
              url: '/info/foreign'
            }
          ]
        },
        meta: {
          name: '行业资讯',
          path: '/info'
        },
        children: [{
            path: 'local',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '本省资讯'
            },
            meta: {
              name: '本省资讯',
              path: '/info/local'
            }
          },
          {
            path: 'foreign',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '外地资讯',
            },
            meta: {
              name: '外地资讯',
              path: '/info/local'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path: '/rule',
        redirect: '/rule/law',
        component: Detail,
        props: {
          menus: [{
            title: '行业政策法规',
            url: '/rule/law'
          }]
        },
        meta: {
          name: '政策法规',
          path: '/rule'
        },
        children: [{
            path: 'law',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '行业政策法规'
            },
            meta: {
              name: '行业政策法规',
              path: '/rule/law'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path: '/garden',
        redirect: '/garden/wetland',
        component: Detail,
        props: {
          menus: [{
              title: '公园湿地',
              url: '/garden/wetland'
            },
            {
              title: '风景名胜',
              url: '/garden/famous'
            }
          ]
        },
        meta: {
          name: '风景园林',
          path: '/garden'
        },
        children: [{
            path: 'wetland',
            component: ListView,
            props: {
              method: 'getImgTexts',
              type: '公园湿地'
            },
            meta: {
              name: '公园湿地',
              path: '/garden/wetland'
            }
          },
          {
            path: 'famous',
            component: ListView,
            props: {
              method: 'getImgTexts',
              type: '风景名胜',
            },
            meta: {
              name: '风景名胜',
              path: '/garden/famous'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path: '/county',
        redirect: '/county/activity',
        component: Detail,
        props: {
          menus: [{
              title: '市县园林政府部门',
              url: '/county/gov'
            },
            {
              title: '协会动态',
              url: '/county/activity',
            }
          ]
        },
        meta: {
          name: '市县动态',
          path: '/county'
        },
        children: [{
            path: '/county/gov',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '园林政府部门动态',
            },
            meta: {
              name: '园林政府部门动态',
              path: '/county/gov'
            }
          },
          {
            path: '/county/activity',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '协会动态'
            },
            meta: {
              name: '协会动态',
              path: '/county/activity'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path: '/enterprise',
        redirect: '/enterprise/intro',
        component: Detail,
        props: {
          menus: [{
              title: '企业介绍',
              url: '/enterprise/intro'
            },
            {
              title: '企业动态',
              url: '/enterprise/activity'
            }
          ]
        },
        meta: {
          name: '企业信息',
          path: '/enterprise'
        },
        children: [{
            path: 'intro',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '企业介绍',
            },
            meta: {
              name: '企业介绍',
              path: '/enterprise/intro'
            }
          },
          {
            path: 'activity',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '企业动态',
            },
            meta: {
              name: '企业动态',
              path: '/enterprise/activity'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path: '/members',
        redirect: '/members/members',
        component: Detail,
        props: {
          menus: [{
            title:'会员介绍',
            url:'/members/members'
          }]
        },
        meta: {
          name: '会员介绍',
          path: '/members'
        },
        children: [
          {
            path: 'members',
            component: ListView,
            props: {
              method: 'getMembers',
            },
            meta: {
              name: '',
              path: '/members'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]

      },
      {
        path: '/notice',
        redirect: '/notice/notice',
        component: Detail,
        props: {
          menus: [
            {
              title:'通知公告',
              url:'/notice/notice'
            }
          ]
        },
        meta: {
          name: '通知公告',
          path: '/notice'
        },
        children: [
          {
            path: 'notice',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '协会公告',
            },
            meta: {
              name: '',
              path: '/notice'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path: '/hr',
        redirect: '/hr/hr',
        component: Detail,
        props: {
          menus: []
        },
        meta: {
          name: '人才库',
          path: '/hr'
        },
        children: [
          {
            path: 'hr',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '人才库',
            },
            meta: {
              name: '',
              path: '/hr'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path:'/trainingcompetition',
        redirect: '/trainingcompetition/train',
        component:Detail,
        props:{
          menus:[
            {
              title:'项目负责人培训',
              url:'/trainingcompetition/train'
            },
            {
              title: '设计竞赛',
              url: '/trainingcompetition/design'
            },
            {
              title:'技能竞赛',
              url:'/trainingcompetition/skill'
            }
          ]
        },
        meta:{
          name:'培训竞赛',
          path:'/trainingcompetition'
        },
        children: [{
            path: 'train',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '项目负责人培训'
            },
            meta: {
              name: '项目负责人培训',
              path: '/trainingcompetition/train'
            }
          },
          {
            path: 'design',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '设计竞赛'
            },
            meta: {
              name: '设计竞赛',
              path: '/trainingcompetition/design'
            }
          },
          {
            path: 'skill',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '技能竞赛'
            },
            meta: {
              name: '技能竞赛',
              path: '/trainingcompetition/skill'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }

        ]
      },
      {
        path:'/expertlibray',
        redirect: '/expertlibray/designmaster',
        component:Detail,
        props:{
          menus:[
            {
              title:'设计大师',
              url:'/expertlibray/designmaster'
            },
            {
              title: '知名专家',
              url: '/expertlibray/famousmaster'
            },
            {
              title: '古建园林营造匠师',
              url: '/expertlibray/gardenbuilder'
            }
          ]
        },
        meta: {
          name: '专家库',
          path: '/expertlibray'
        },
        children: [{
            path: '/expertlibray/designmaster',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '设计大师'
            },
            meta: {
              name: '设计大师',
              path: '/expertlibray/designmaster'
            }
          },
          {
            path: '/expertlibray/famousmaster',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '知名专家'
            },
            meta: {
              name: '知名专家',
              path: '/expertlibray/famousmaster'
            }
          },
          {
            path: '/expertlibray/gardenbuilder',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '古建园林营造匠师'
            },
            meta: {
              name: '古建园林营造匠师',
              path: '/expertlibray/gardenbuilder'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path:'/gardenforum',
        redirect: '/gardenforum/theoreticaldevelopment',
        component:Detail,
        props:{
          menus:[
            {
              title:'理论动态',
              url:'/gardenforum/theoreticaldevelopment'
            },
            {
              title: '应用研究',
              url: '/gardenforum/appliedresearch'
            }
          ]
        },
        meta: {
          name: '园林论坛',
          path: '/gardenforum'
        },
        children: [{
            path: '/gardenforum/theoreticaldevelopment',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '理论动态'
            },
            meta: {
              name: '理论动态',
              path: '/gardenforum/theoreticaldevelopment'
            }
          },
          {
            path: '/gardenforum/appliedresearch',
            component: ListView,
            props: {
              method: 'getInfos',
              type: '应用研究'
            },
            meta: {
              name: '应用研究',
              path: '/gardenforum/appliedresearch'
            }
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path:'/associationpublication',
        redirect: '/associationpublication/jiangsu',
        component:Detail,
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
          path:'/associationpublication'
        },
        children: [{
            path: '/associationpublication/jiangsu',
            component: ListView,
            props: {
              method: 'getImgTexts',
              type: '协会刊物'
            },
            meta: {
              name: '江苏风景园林',
              path: '/associationpublication/jiangsu'
            },
          },
          {
            path: 'page',
            component: TextView,
            meta: {
              name: '文档',
              path: './'
            }
          }
        ]
      },
      {
        path:'/search',
        component:Detail,
        props:{
          menus:[
            {
              title:'结果',
              url:'search/result'
            }
          ]
        },
        meta:{
          title:'搜索',
          path:'/search'
        },
        children:[
          {
            path:'/search/result',
            name:'search',
            component:ListView,
            props:{
              method:'getBlurInfos'
            },
            meta:{
              title:'搜索结果',
              path:'/search/result'
            }
          },
          {
            path:'page',
            component:TextView,
            meta:{
              title:'文档',
              path:'./'
            }
          }
        ]
      }
    ]
  }],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }
    return {x: 0, y: 0}
}
})

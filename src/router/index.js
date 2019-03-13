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
      }
    ]
  }]
})

import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import HelloWorld from '@/views/HelloWorld'
import Index from '@/views/Index'
import Detail from '@/views/Detail'
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
      {
        path: '/detail',
        name: 'detail',
        component: Detail,
        meta: {
          name: '详情',
          path: '/detail'
        }
      },
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
            component: '',
          },
          {
            path: 'rule',
            component: '',
          },
          {
            path: 'committee',
            component: ''
          },
          {
            path: 'district',
            component: ''
          }
        ]
      }
    ]
  }]
})

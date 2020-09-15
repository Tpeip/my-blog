import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Technology from '@/pages/technology/technology'
import Life from '@/pages/life/life'
import About from '@/pages/other/about'
import Resource from '@/pages/resource/resource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tech',
      name: 'tech',
      component: Technology
    },
    {
      path: '/life',
      name: 'life',
      component: Life
    },
    {
      path: '/resource',
      name: 'resource',
      component: Resource
    },
    {
      path: '/other',
      name: 'other',
      component: About
    }
  ]
})

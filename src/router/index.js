import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/houtai/layouts/Header'
import Home from '@/components/houtai/layouts/Home'
import Sidebar from '@/components/houtai/layouts/Sidebar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})



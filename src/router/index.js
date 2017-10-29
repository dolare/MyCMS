import Vue from 'vue'
import Router from 'vue-router'

import AdminHome from '@/components/houtai/layouts/Home'
import Home from '@/components/qiantai/pages/home'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/admin',
            name: 'admin',
            component: AdminHome
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})



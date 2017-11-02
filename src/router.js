import Vue from 'vue'
import Router from 'vue-router'

import AdminHome from './houtai/components/pages/Dashboard.vue'
import Login from  './houtai/components/pages/Login.vue'

import QiantaiHome from './qiantai/components/pages/Home.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/admin',
            name: 'AdminHome',
            component: AdminHome,
        },
        {
            path: '/',
            name: 'QiantaiHome',
            component: QiantaiHome
        }
    ]
})

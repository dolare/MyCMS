import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/houtai/pages/Dashboard'
import QiantaiHome from '@/components/qiantai/pages/Home'
import Login from  '@/components/houtai/pages/Login'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/admin',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'QiantaiHome',
            component: QiantaiHome
        }
    ]
})



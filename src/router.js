import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './houtai/components/pages/Dashboard.vue'
import QiantaiHome from './qiantai/components/pages/Home.vue'
import Login from  './houtai/components/pages/Login.vue'

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

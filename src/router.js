import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        }, {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/course',
            name: 'course',
            component: () => import('./views/Course.vue')
        },
        {
            path: '/reading',
            name: 'reading',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Reading.vue')
        },

        {
            path: '/studygroup',
            name: 'studygroup',
            component: () => import('./views/StudyGroup.vue')
        },
        {
            path: '/vipzone',
            name: 'vipzone',
            component: () => import('./views/VIPZone.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        }
    ]
})

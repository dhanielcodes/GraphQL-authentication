import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import("../views/Login.vue")
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () => import("../views/Signup.vue")
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import("../views/Admin.vue")
        }
    ],
    mode: 'history'
})

export default router
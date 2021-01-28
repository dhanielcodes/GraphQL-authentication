import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import("../views/Login.vue"),
            beforeEnter: (to, from, next) => {
                if(localStorage.getItem("apollo-token")){
                  return next({
                    name: 'Admin'
                  })
                }
                next()
            }
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () => import("../views/Signup.vue"),
            beforeEnter: (to, from, next) => {
                if(localStorage.getItem("apollo-token")){
                  return next({
                    name: 'Admin'
                  })
                }
                next()
            }
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import("../views/Admin.vue"),
            beforeEnter: (to, from, next) => {
                if(!localStorage.getItem("apollo-token")){
                  return next({
                    name: 'Login'
                  })
                }
                next()
            }
        }
    ],
    mode: 'history'
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../components/Login.vue"
import IndexComponent from "../components/Index.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/index",
            name: "index",
            component: IndexComponent
        }
    ]
})
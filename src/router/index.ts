import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Checkout from "@/views/Checkout.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter)

const routes = [
    {
        component: Home,
        path: "/",
        name: "Home",
    },
    {
        component: Checkout,
        path: "/checkout",
        name: "Checkout",
    },
    {
        component: Login,
        path: "/login",
        name: "Login",
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

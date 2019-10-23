import Vue from 'vue'
import VueRouter from 'vue-router'

const jigouList = () => import("./view/jigou-list.vue") ;
const jigouDetail = ()=> import("./view/jigou-detail.vue");
const login = ()=> import("./view/login.vue");
const register = ()=> import("./view/register.vue");
const mycenter = ()=> import("./view/mycenter.vue");
const index = ()=> import("./view/index.vue");
Vue.use(VueRouter)

const routes = [
    { path: "/", component: index },
    { path: "/jigoulist", component: jigouList },
    { path: "/detail", component: jigouDetail },
    { path: "/login", component: login },
    { path: "/register", component: register },
    { path: "/my", component: mycenter }   
];
const router = new VueRouter({
    mode:'hash',
    routes
})

export default router

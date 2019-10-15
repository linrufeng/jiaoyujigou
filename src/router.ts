import Vue from 'vue'
import VueRouter from 'vue-router'

const jigouList = () => import("./view/jigou-list.vue") ;
const jigouDetail = ()=> import("./view/jigou-detail.vue");
const login = ()=> import("./view/login.vue");
const mycenter = ()=> import("./view/mycenter.vue");

Vue.use(VueRouter)

const routes = [
    { path: "/", component: jigouList },
    { path: "/detail", component: jigouDetail },
    { path: "/login", component: login },
    { path: "/my", component: mycenter }   
];
const router = new VueRouter({
    mode:'hash',
    routes
})

export default router

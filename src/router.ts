import Vue from 'vue'
import VueRouter from 'vue-router'

const jigouList = () => import("./view/jigou-list.vue") ;
const jigouDetail = ()=> import("./view/jigou-detail.vue");
Vue.use(VueRouter)

const routes = [
    { path: "/", component: jigouList },
    { path: "/detail", component: jigouDetail }   
];
const router = new VueRouter({
    mode:'hash',
    routes
})

export default router

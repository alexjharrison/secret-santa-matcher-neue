import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from './pages/Home.vue'

const routes: RouteRecordRaw[] = [
    { path: "/", component: Home }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export { router }
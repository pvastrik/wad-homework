import { createRouter, createWebHashHistory } from 'vue-router'
import SignupView from "@/views/SignupView.vue"
import HomeView from "@/views/HomeView";

const routes = [{
        path: '/',
        name: 'signup',
        component: SignupView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
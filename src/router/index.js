import { createRouter, createWebHashHistory } from 'vue-router'
import SignupView from "@/views/SignupView.vue";
import HomeView from "@/views/HomeView";
import AddPostView from "@/views/AddPostView.vue";
import PostUpdateView from "@/views/PostUpdateView.vue";
import LoginView from "@/views/LoginView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [{
        path: '/',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/addPost',
        name: 'addPost',
        component: AddPostView
    },
    {
        path: '/postUpdate',
        name: 'postUpdate',
        component: PostUpdateView
    },

    {
        path: '/signup',
        name: 'signup',
        component: SignupView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import SignupView from "@/views/SignupView.vue";
import HomeView from "@/views/HomeView";
import AddPostView from "@/views/AddPostView.vue";
import PostUpdateView from "@/views/PostUpdateView.vue";
import LoginView from "@/views/LoginView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        beforeEnter: async (to, from, next) => auth(to, from, next)
    },
    {
        path: '/post/:id',
        name: 'post',
        component: PostUpdateView,
        beforeEnter: async (to, from, next) => auth(to, from, next)

    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
    },
    {
        path: '/addPost',
        name: 'addPost',
        component: AddPostView,
        beforeEnter: async (to, from, next) => auth(to, from, next)
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignupView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    }
]

async function auth(to, from, next) {
        let authResult =  await fetch("http://localhost:3000/auth/authenticate", {
            credentials: 'include'
        }) // Don't forget to specify this if you need cookies
            .then((response) => response.json())
            .catch((e) => {
                console.log(e);
            });
    if (!authResult.authenticated) {
        next('/login')
    } else {
        next()
    }
    }
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
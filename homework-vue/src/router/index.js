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
        beforeEnter: async (to, from, next) => {
            let authResult = await fetch("http://localhost:3000/auth/authenticate", {
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
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
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
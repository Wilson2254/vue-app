import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books'
import Words from '../views/Words'
import Signin from '../views/Signin'
import Signup from '../views/Signup'
import Profile from '../views/Profile'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/books',
        name: 'books',
        component: Books
    },
    {
        path: '/words',
        name: 'words',
        component: Words
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router
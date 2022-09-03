import {createRouter,createWebHistory} from 'vue-router'
import Cat from '../pages/Cat'
import Dog from '../pages/Dog'

const routes = [
    {
        path: '/cat',
        component: Cat
    },
    {
        path: '/dog',
        component: Dog
    }
]
const router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/micro-app3" : "/"),
    routes
})

export default router
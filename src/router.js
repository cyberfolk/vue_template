import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue"
import QuadView from "./views/QuadView.vue"
import NotFound from "./views/NotFound.vue";

/**
 * !  WARNING
 * If you change the route name you have to change the related field 
 * in this file: vite-boolfolio/src/assets/data/jumbotron.json
 */

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/quad',
            name: 'quad',
            component: QuadView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
})
export { router }

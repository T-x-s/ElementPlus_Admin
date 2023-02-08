import { createRouter, createWebHistory } from 'vue-router'
/* Layout */
// import Layout from '@/layout/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login.vue')
        },
        {
            path: "/:path(.*)",
            name: "404",
            component: () => import('@/views/error/404.vue'),
        },
        {
            path: '/401',
            name: "401",
            component: () => import('@/views/error/401.vue'),
        },
        // {
        //     path: '/dashboard',
        //     component: Layout,
        //     children: [
        //         {
        //             path: '/dashboard',
        //             component: () => import('@/views/dashboard/index.vue'),
        //             name: 'Index'
        //         }
        //     ]
        // },
        // {
        //     path: '/file',
        //     component: Layout,
        //     children: [
        //         {
        //             path: '/file',
        //             component: () => import('@/views/file/index.vue'),
        //             name: 'File'
        //         }
        //     ]
        // }
    ]
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ComponentsPage from '@/views/pages/components-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ComponentsPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

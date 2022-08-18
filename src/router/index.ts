import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    component:()=>import('@/views/common/home.vue')
  },
  {
    path:'/signIn',
    component:()=>import('@/views/common/sign_in.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../Home.vue")
    },
    {
      path: '/soma',
      name: 'soma',
      component: () => import("../Soma.vue")
    },
    {
      path: '/subtracao',
      name: 'subtracao',
      component: () => import("../Subtracao.vue")
    },
    {
      path: '/divisao',
      name: 'divisao',
      component: () => import("../Divisao.vue")
    },
    {
      path: '/raizcubica',
      name: 'raizcubica',
      component: () => import("../RaizCubica.vue")
    }
  ]
})

export default router

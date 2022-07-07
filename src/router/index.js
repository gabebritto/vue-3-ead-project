import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import MySupports from '@/views/supports/MySupports.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'

const routes = [
  {
    path: '/ead',
    component: () => import('@/layouts/TemplateDefault.vue'),

    children: [
      {
        path: 'modulos',
        name: 'ead.modulos',
        component: ModulesAndLessons
      },
      {
        path: 'minhas-duvidas',
        name: 'ead.my.supports',
        component: MySupports
      },
      
      {
        path: '',
        name: 'ead.home',
        component: HomeView
      },


    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

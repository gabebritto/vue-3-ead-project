import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import MySupports from '@/views/supports/MySupports.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'
import AuthLogin from '@/views/auth/AuthLogin.vue'
import ForgotPassword from '@/views/auth/ForgotPassword.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'

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
  },
  {
    path: '/',
    name: 'auth.login',
    component: AuthLogin
  },
  {
    path: '/recuperar-senha',
    name: 'forgot.password',
    component: ForgotPassword
  },
  {
    path: '/reset/:token',
    name: 'reset.password',
    component: ResetPassword,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

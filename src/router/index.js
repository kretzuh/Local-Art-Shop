import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/probeaza',
    name: 'probeaza',
    component: () => import('../views/probeazaView.vue')
  },
  {
    path: '/cos_de_cumparaturi',
    name: 'cos_de_cumparaturi',
    component: () => import('../views/cos_de_cumparaturiView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
      component: () => import('../views/contactView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

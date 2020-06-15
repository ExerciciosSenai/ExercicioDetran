import Vue from 'vue'
import VueRouter from 'vue-router'
import consulta from '../views/consulta.vue'
import resultado from '../views/resultado.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'consulta',
    component: consulta
  },
  {
    path: '/resultado',
    name: 'resultado',
    component: resultado
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

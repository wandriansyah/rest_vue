import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DataDisplay.vue'
import FormInput from '../views/FormInput.vue'
import AnggotaView from '../views/AnggotaView.vue'
import AnggotaForm from '../views/AnggotaForm.vue'

import PeminjamanView from '../views/PeminjamanView.vue'
import PeminjamanForm from '../views/PeminjamanForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add_buku',
    name: 'add_buku',
    component: FormInput
  },
  {
    path: '/anggota',
    name: 'anggota',
    component: AnggotaView
  },
  {
    path: '/add_anggota',
    name: 'add_anggota',
    component: AnggotaForm
  },
  {
    path: '/peminjaman',
    name: 'peminjaman',
    component: PeminjamanView
  },
  {
    path: '/add_peminjaman',
    name: 'add_peminjaman',
    component: PeminjamanForm
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

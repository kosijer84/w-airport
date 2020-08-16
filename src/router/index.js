import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flying',
    name: 'Flying',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "flying" */ '../views/Flying.vue')
  },
  {
    path: '/takeoff-landing',
    name: 'TOL',
    component: () => import(/* webpackChunkName: "takeoff-landing" */ '../views/TOL.vue')
  },
  {
    path: '/parking',
    name: 'Parking',
    component: () => import(/* webpackChunkName: "parking" */ '../views/Parking.vue')
  },
  {
    path: '/destinations',
    name: 'Destinations',
    component: () => import(/* webpackChunkName: "Destinations" */ '../views/Destinations.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router

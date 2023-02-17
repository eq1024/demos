import { createRouter, createWebHistory } from 'vue-router';
import type {RouteRecordRaw} from 'vue-router'
import HomeView from '../views/binary.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/binary',
    name: 'binary',
    component: () => import('../views/binary.vue'),
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

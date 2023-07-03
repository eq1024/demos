import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../pages/login/index.vue'

const routes = [
  { path: '/', component: login },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

router.beforeEach(async (to, from) => {
  // if (
  //   // 检查用户是否已登录
  //   !isAuthenticated &&
  //   // ❗️ 避免无限重定向
  //   to.name !== 'Login'
  // ) {
  //   // 将用户重定向到登录页面
  //   return { name: 'Login' }
  // }
})

export default router
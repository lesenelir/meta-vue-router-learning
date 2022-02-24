import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { // 路由元信息
      word: 'Hello World'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    // path: '/category/:id?', /* ?代表后面的参数可携带，也可不携带 */
    path: '/category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 全局导航守卫 / 路由拦截
// 进入购物车之前，必须要有token

/**
 * @param to   去往哪个路由
 * @param from 从哪个路由来
 * @param next 执行跳转，next()是一个方法
 */
router.beforeEach((to, from, next) => {
  if (to.path === '/cart') {
    const token = localStorage.getItem('token')
    if (token) { // 判断用户去购物车是否登录了; token存在 则直接跳转
      next()
    } else { // 去购物车 但是没登录
      next('/user')
    }
  } else { // 不是去购物车的路由全部跳转
    next()
  }
})

export default router

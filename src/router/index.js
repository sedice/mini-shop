import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register'),
  },
  {
    path: '/404',
    name: 'notfound',
    component: () => import('@/views/notfound'),
  },
  {
    path: '/',
    component: () => import('@/views/index'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home'),
      },
      {
        path: '/serch',
        name: 'serch',
        component: () => import('@/views/serch'),
      },
      {
        path: '/shopping-cart',
        name: 'shopping-cart',
        component: () => import('@/views/shopping-cart'),
        meta: {
          auth: true,
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile'),
      },
      {
        path: '*',
        redirect: '/404',
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

/**
 * 全局的路由守卫
 */
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log('需要检测登录状态');
    next();
    return;
  }
  next();
});

export default router;

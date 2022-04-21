import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '@/pages/notFound/index.vue';
import baseConfig from '@build/base.config';
import home from './routes/home';
import about from './routes/about';

const envConfig = (baseConfig as any)[import.meta.env.VITE_API_ENV];

const router = createRouter({
  history: createWebHashHistory(envConfig.base),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    home,
    about,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

// 设置路由前置钩子
router.beforeEach(async (to, from, next) => {
  console.log('beforeEach hook...');
  next();
});

// 设置路由后置钩子
router.afterEach(() => {
  console.log('afterEach hook...');
});

export default router;

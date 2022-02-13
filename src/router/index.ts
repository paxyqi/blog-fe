import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
    path: '/',
    name: 'Home',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../components/post/Create.vue')
  },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title as string;
    }
    next();
  });
  
  export default router;

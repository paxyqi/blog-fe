import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../components/post/Create.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../components/post/Edit.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../components/post/Post.vue')
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

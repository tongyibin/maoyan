import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/index/index.vue'),
      children: [
        {
          path: 'film',
          name: 'film',
          component: () => import('./views/index/film.vue')
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: () => import('./views/index/cinema.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/index/center.vue'),
          meta: {
            requireLogin: true
          }
        },
        {
          path: '',
          redirect: '/film'
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/city/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/index.vue'),
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('./views/login/register.vue')
    }
  ],
  scrollBehavior(to, from, savePosition ){
    
    return {x: 0,y: 0}
  }

})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    // 判断是否有登录
    if (window.localStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  // console.log(to)
  next()
})

export default router

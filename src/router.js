import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/index/index.vue'),
      children: [
        {
          path: 'film',
          name: 'film',
          component: () => import('./views/index/film')
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: () => import('./views/index/cinema.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('./views/index/center.vue')
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
    }
  ]
})

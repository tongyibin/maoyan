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
          path: 'movie',
          name: 'movie',
          component: () => import('./views/index/movie.vue')
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: () => import('./views/index/cinema.vue')
        },
        {
          path: '',
          redirect: '/movie'
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City/index.vue')
    }
  ]
})

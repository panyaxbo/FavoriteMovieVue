import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Posts from '@/components/Posts'
import EditMovie from '@/components/EditMovie'
import NewMovie from '@/components/NewMovie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/edit-movie',
      name: 'edit-movie',
      component: EditMovie
    },
    {
      path: '/new-movie',
      name: 'new-movie',
      component: NewMovie
    }
  ]
})

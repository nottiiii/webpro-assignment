import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import Add from '@/components/add'
import Edit from '@/components/edit'


Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/add',
        name: 'Add',
        component: Add
      },
      {
        path: '/edit/:userId',
        name: 'Edit',
        component: Edit
      }
    ]
  })
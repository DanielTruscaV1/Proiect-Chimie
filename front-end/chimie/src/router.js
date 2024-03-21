import { createRouter, createWebHistory } from 'vue-router'

import Profile from './components/Profile.vue'
import Auth from './components/Auth.vue'

// these are passed to `createRouter`
export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path:"/profile",
        component:Profile
      }
      ,
      {
        path:"/auth",
        component:Auth
      }
    ],
  })
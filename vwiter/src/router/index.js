import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Notification from '../views/Notification.vue'
import Message from '../views/Message.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    name: 'Home',
    path : '/',
    component: Home,
  },
  {
    name: 'Search',
    path : '/search',
    component: Search,
  },
  {
    name: 'Notification',
    path : '/notification',
    component: Notification,
  },
  {
    name: 'Message',
    path : '/message',
    component: Message,
  },
  {
    name: 'Profile',
    path : '/profile',
    component: Profile,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'router-link-active'
})

export default router

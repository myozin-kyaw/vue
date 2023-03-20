import { createRouter, createWebHistory } from 'vue-router'

/* Landing Page */
import LandingPage from '@/views/landingPage/LandingPage.vue'

/* Home Index */
import UserHomePage from '@/views/home/Home.vue'

/* Not Found */
import NotFound from '@/views/NotFound.vue'

const routes = [
  // Landing Page
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: {
      requireAuth: false
    }
  },
  // Home
  {
    path: '/user-name',
    name: 'UserHomePage',
    component: UserHomePage,
    meta: {
      requireAuth: true
    }
  },
  // Not Found Page
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound',
    meta: {
        requireAuth: false
    }
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta.requireAuth && !localStorage.getItem('token')) {
      return { name: 'LandingPage' }
  }
  if (to.meta.requireAuth == false && localStorage.getItem('token')) {
      return { name: 'UserHomePage' }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import PomodoroTimer from '../components/pomodoroTimer.vue'

const routes = [
  {
    path: '/',
    name: 'Pomodoro',
    component: PomodoroTimer,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

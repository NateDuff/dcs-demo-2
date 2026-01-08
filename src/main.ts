import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import './style.css'

import Home from './pages/Home.vue'
import Menu from './pages/Menu.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

const head = createHead()

const app = createApp(App)
app.use(router)
app.use(head)
app.mount('#app')

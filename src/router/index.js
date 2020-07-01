import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skill from '@/views/Skill.vue'
import Outputs from '@/views/Outputs.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/outputs', component: Outputs },
    { path: '/skill', component: Skill }
  ]
})
export default router

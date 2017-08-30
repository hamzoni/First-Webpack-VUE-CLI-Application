import VueRouter from 'vue-router'

import Albumn from '@pages/Album.vue'
import Profile from '@pages/Profile.vue'

const routes = [
  { path: '/', component: Albumn },
  { path: '/profile/:username', component: Profile, props: true }
]

export default new VueRouter({
  routes
})

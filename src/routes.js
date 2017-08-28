import VueRouter from 'vue-router';

import Albumn from './components/pages/Albumn.vue'
import Profile from './components/pages/Profile.vue'

const routes = [
    { path: '/', component: Albumn },
    { path: '/profile/:username', component: Profile, props: true }
]

export default new VueRouter({
    routes
});

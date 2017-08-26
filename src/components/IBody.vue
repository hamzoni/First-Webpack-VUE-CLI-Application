<template>
<div class="container">
    <div id="body-content">
        <section class="section">
            <router-view></router-view>
        </section>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

import Albumn from './pages/Albumn.vue'
import Profile from './pages/Profile.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Albumn },
    { path: '/profile/:username', component: Profile, props: true }
]

const router = new VueRouter({
    routes
})

export default {
    name: 'body-content',
    router,
    components: {

    },
    data () {
      return {}
    }
}
</script>

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
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import router from './../routes.js'

export default {
    name: 'body-content',
    router
}
</script>

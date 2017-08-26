<template>
<section class="hero is-primary is-medium" id="header-content">
     <Menubar></Menubar>
     <div class="hero-body">
          <div class="container">
               <p class="title is-1">{{ mainTitle }}</p>
               <p class="subtitle is-3">{{ altTitle }}</p>
          </div>
     </div>
</section>
</template>

<script>

import Menubar from './partials/Navigator.vue'

export default {
     name: 'header-content',
     components: {
          Menubar
     },
     data() {
          return {
               mainTitle: 'UNSPLASH ALBUMN',
               altTitle: 'Vue Assignment - QuyTa'
          }
     }
}
</script>

<template>
<div id="app">
     <IHeader></IHeader>
     <IBody></IBody>
     <IFooter></IFooter>
</div>
</template>

<script>
import IHeader from './components/IHeader.vue'
import IBody from './components/IBody.vue'
import IFooter from './components/IFooter.vue'

export default {
     name: 'app',

     components: {
          IHeader,
          IBody,
          IFooter
     },

     data () {
          return {

          }
     }
}

</script>

<style lang="scss">
@import '~bulma/bulma.sass';
</style>

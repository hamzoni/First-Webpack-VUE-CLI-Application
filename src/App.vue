<template>
<div id="app">
     <HeaderContent></HeaderContent>
     <BodyContent></BodyContent>
     <FooterContent></FooterContent>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
     name: 'app',

     components: {
          'HeaderContent': Header,
          'BodyContent': Body,
          'FooterContent': Footer
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

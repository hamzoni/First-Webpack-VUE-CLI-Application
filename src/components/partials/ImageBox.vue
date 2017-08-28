<template>
<div class="card">
     <div class="card-image">
          <figure class="image is-4by3">
               <img :src="thumbnail" alt="Image">
          </figure>
     </div>
     <div class="card-content">
          <div class="media">
               <div class="media-content">
                    <p class="title is-4">{{ fullName }}</p>
                    <p class="subtitle is-6">
                         <router-link :to="profileUrl">
                              {{ username }}
                         </router-link>
                    </p>
               </div>
          </div>
          <div class="content">
               <small>{{ date.created }}</small>
          </div>
     </div>
</div>
</template>
<script>
     import VueRouter from 'vue-router'
     import DateFormat from 'date-fns/format'
     import DateParse from 'date-fns/parse'

     export default {
          name: 'Card',
          props: ['info'],
          computed: {
               thumbnail: function() {
                    return this.info.urls.thumb;
               },
               date: function() {
                    return {
                         created: DateFormat(DateParse(this.info.created_at), "hh:mm:ss A MMM Do YYYY"),
                         updated: DateFormat(DateParse(this.info.updated_at), "hh:mm:ss A MMM Do YYYY")
                    }
               },
               fullName: function() {
                    return this.info.user.first_name + " " + this.info.user.last_name;
               },
               username: function() {
                    return "@" + this.info.user.username;
               },
               profileUrl: function() {
                    return "/profile/" + this.info.user.username;
               }
          }
     }
</script>
<style type="scss">
     .card {
          height: 100%;
     }
</style>

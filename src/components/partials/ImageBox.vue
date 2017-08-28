<template>
<div class="card" id="Card">
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
                         <a>
                              <router-link :to="profileUrl">
                                   {{ username }}
                              </router-link>
                         </a>
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
     import Moment from 'moment'
     import DateFNS from 'date-fns'

     window.DateFNS = DateFNS;

     export default {
          name: 'Card',
          props: ['info'],
          data() {
               return {
                    thumbnail: this.info.urls.thumb,
                    date: {
                         created: DateFNS.format(DateFNS.parse(this.info.created_at), "hh:mm:ss A MMM Do YYYY"),
                         updated: DateFNS.format(DateFNS.parse(this.info.updated_at), "hh:mm:ss A MMM Do YYYY")
                    },
                    fullName: this.info.user.first_name + " " + this.info.user.last_name,
                    username: "@" + this.info.user.username,
                    profileUrl: "/profile/" + this.info.user.username
               }
          }
     }
</script>
<style type="scss">
     .card {
          height: 100%;
     }
</style>

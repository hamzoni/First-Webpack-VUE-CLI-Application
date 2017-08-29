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
                    if (this.info) {
                         if (this.info.urls) {
                              if (this.info.urls.thumb) {
                                   return this.info.urls.thumb;
                              }
                         }
                    }
                    return null;
               },
               date: function() {
                    let dateCreated = '';
                    let dateUpdated = '';
                    if (this.info) {
                         if (this.info.created_at) {
                              dateCreated = DateFormat(DateParse(this.info.created_at), "hh:mm:ss A MMM Do YYYY");
                         }
                         if (this.info.updated_at) {
                              dateUpdated = DateFormat(DateParse(this.info.updated_at), "hh:mm:ss A MMM Do YYYY");
                         }
                    }
                    return {
                         created: dateCreated,
                         updated: dateUpdated
                    }
               },
               fullName: function() {
                    let firstName = '';
                    let lastName = '';
                    if (this.info) {
                         if (this.info.user) {
                              if (this.info.user.first_name) firstName = this.info.user.first_name;
                              if (this.info.user.last_name) lastName = this.info.user.last_name;
                         }
                    }
                    return firstName + ' ' + lastName;
               },
               username: function() {
                    let userName = '';
                    if (this.info) {
                         if (this.info.user) {
                              if (this.info.user.username) {
                                   userName = "@" + this.info.user.username;
                              }
                         }
                    }
                    return userName;
               },
               profileUrl: function() {
                    let profileLink = '';
                    if (this.info) {
                         if (this.info.user) {
                              if (this.info.user.username) {
                                   profileLink = "/profile/" + this.info.user.username;
                              }
                         }
                    }
                    return profileLink;
               }
          }
     }
</script>
<style type="scss">
     .card {
          height: 100%;
     }
</style>

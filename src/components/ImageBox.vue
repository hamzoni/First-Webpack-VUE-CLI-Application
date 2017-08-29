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
               thumbnail() {
                    if (!this.info) return '';
                    if (!this.info.urls) return '';
                    if (!this.info.urls.thumb) return '';
                    return this.info.urls.thumb;
               },
               date() {
                    let dateDefault = {
                         created: '',
                         updated: ''
                    }

                    if (!this.info) return thumb;

                    if (this.info.created_at) {
                         dateDefault.created = DateFormat(DateParse(this.info.created_at), "hh:mm:ss A MMM Do YYYY");
                    }
                    if (this.info.updated_at) {
                         dateDefault.updated = DateFormat(DateParse(this.info.updated_at), "hh:mm:ss A MMM Do YYYY");
                    }
                    return dateDefault;
               },
               fullName() {
                    if (!this.info) return '';
                    if (!this.info.user) return '';

                    let nameValue = '';
                    let firstName = '';
                    let lastName = '';

                    if (this.info.user.first_name) firstName = this.info.user.first_name;
                    if (this.info.user.last_name) lastName = this.info.user.last_name;
                    if (firstName != '') nameValue += firstName + ' ';
                    if (lastName != '') nameValue += lastName;

                    return nameValue;
               },
               username() {
                    if (!this.info) return '';
                    if (!this.info.user) return '';
                    if (!this.info.user.username) return '';

                    return "@" + this.info.user.username;
               },
               profileUrl() {
                    if (!this.info) return '';
                    if (!this.info.user) return '';
                    if (!this.info.user.username) return '';

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

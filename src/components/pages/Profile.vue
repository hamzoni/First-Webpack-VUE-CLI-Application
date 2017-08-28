<template>
    <div id="userProfile">
        <profile-frame>
            <div class="section profile-heading" v-if="profileData !== undefined">
                <div class="columns">
                    <div class="column is-2">
                        <div class="image is-128x128 avatar">
                            <img :src="avatar">
                        </div>
                    </div>
                    <div class="column is-4 name">
                        <p>
                            <span class="title is-bold">{{ name }}</span>
                            <h6 class="subtitle is-6">{{ location }}</h6>
                            <h5 class="subtitle is-5">{{ bio }}</h5>
                        </p>
                        <p class="tagline"></p>
                    </div>
                    <div class="column is-2 followers has-text-centered">
                        <p class="stat-val">{{ followers }}</p>
                        <p class="stat-key">followers</p>
                    </div>
                    <div class="column is-2 following has-text-centered">
                        <p class="stat-val">{{ following }}</p>
                        <p class="stat-key">following</p>
                    </div>
                    <div class="column is-2 likes has-text-centered">
                        <p class="stat-val">{{ downloads }}</p>
                        <p class="stat-key">downloads</p>
                    </div>
                </div>
            </div>
        </profile-frame>
        <transition name="fade">
            <loader v-show="loading"></loader>
        </transition>
    </div>
</template>
<script>
    import API from './../../assets/js/api.js'

    import ProfileFrame from './../partials/ProfileFrame.vue';
    import Loader from './../partials/Loader.vue';

    export default {
        name: 'UserProfile',

        props: ['username'],

        components: {
          'profile-frame': ProfileFrame,
          'loader': Loader
        },

        mounted() {
            this.getProfile(this.username);
        },

        data() {
            return {
                api: new API(),
                profileData: undefined,
                loading: false,

                avatar: "",
                name: "",
                location: "",
                bio: "",
                followers: 0,
                following: 0,
                downloads: 0,
            }
        },

        methods: {
            getProfile(username) {
                this.loading = true;
                this.api.profile.getProfile(username)
                    .then(info => {
                        this.profileData = info;

                        this.avatar = info.data.profile_image.large;
                        this.name = info.data.name;
                        this.location = info.data.location;
                        this.bio = info.data.bio;
                        this.followers = info.data.followers_count;
                        this.following = info.data.following_count;
                        this.downloads = info.data.downloads;

                        this.loading = false;
                    })
                    .catch(error => {
                        this.loading = false;
                        console.log("error");
                });
            }
        }
    }
</script>
<style type="scss">
.fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

.container.profile {
  margin-top:50px;
}
.profile-heading {
  margin: 20px 0;
  padding-bottom: 30px;
}
.profile-heading .name {
  border-right: 1px solid #f1f1f1;
  margin:-30px 0;
  padding: 40px 30px 0 30px;
}
.profile-heading .followers, .profile-heading .following {
  border-right: 1px solid #f1f1f1;
  margin:-30px 0;
  padding: 70px 30px;
}
.profile-heading .likes {
  margin:-30px 0;
  padding: 70px 30px;
}
.profile-heading .stat-key {
  font-size: 20px;
  font-weight: 200;
}
.profile-heading .stat-val {
  font-size: 35px;
  font-weight: bold;
}
.profile-options {
  background-color: #f1f1f1;
  margin:-20px 0 20px 0;
}
.profile-options .link a {
  padding:18px;
  font-size: 18px;
}
.profile-options .link .icon {
  font-size: 16px;
  padding-top:2px;
}
.tagline {
  padding:20px 0;
  font-size: 16px;
  line-height: 1.4;
}
.avatar {
  float: right;
}
.follow {
  float: right;
}
.avatar img {
  border-radius: 200px;
}
p.title.is-bold {
  font-weight: bold;
}
.card .timestamp {
  float:right;
  color:#bbb;
}
</style>

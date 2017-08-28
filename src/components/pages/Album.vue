<template>
    <div id="album">

        <album-frame>
            <div class="columns" v-for="stack in photos">
                <div class="column" v-for="photo in stack">
                    <box :info='photo'></box>
                </div>
            </div>
        </album-frame>

        <transition name="fade">
            <loader v-show="loading"></loader>
        </transition>

        <pagination
            :pagData='pagination'
            :currentPage='currentPage'
            @changePage='getPhotos'
        ></pagination>

    </div>
</template>
<script>
    import API from './../../assets/js/api.js'

    import AlbumFrame from './../partials/AlbumFrame.vue';
    import ImageBox from './../partials/ImageBox.vue';
    import Pagination from './../partials/Pagination.vue';
    import Loader from './../partials/Loader.vue';


    export default {
        name: 'Album',
        components: {
          'box': ImageBox,
          'pagination': Pagination,
          'loader': Loader,
          'album-frame': AlbumFrame
        },

        mounted() {
            this.getPhotos(this.currentPage);
        },

        data() {
            return {
                api: new API(),
                photos: undefined,
                pagination: undefined,
                currentPage: 1,
                loading: false
            }
        },

        methods: {
            getPhotos(page) {
                this.photos.splice(0, this.photos.length);
                this.currentPage = page;
                this.loading = true;
                this.api.album.listing(page, 12)
                .then(data => {
                    let photoData = data.data;
                    this.pagination = data.headers.link;
                    for (let i = 0; i < Math.ceil(photoData.length / 4); i++) {
                        this.photos[i] = [];
                        for (let j = 0; j <  4; j++) {
                            if (photoData[i * 4 + j] != undefined) {
                                this.photos[i].push(photoData[i * 4 + j]);
                            }
                        }
                    }
                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error);
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
</style>

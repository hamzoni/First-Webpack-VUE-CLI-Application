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
    import API from 'API';
    import _array from 'lodash/array';

    import AlbumFrame from '@components/AlbumFrame.vue';
    import ImageBox from '@components/ImageBox.vue';
    import Pagination from '@components/Pagination.vue';
    import Loader from '@components/Loader.vue';

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
                photos: [],
                pagination: undefined,
                currentPage: 1,
                loading: false,
                numberOfRows: 3,
                imagesPerRow: 4
            }
        },

        methods: {
            getPhotos(page) {
                this.currentPage = page;
                this.loading = true;

                this.api.album.listing(page, this.numberOfRows * this.imagesPerRow)
                .then(data => {
                    this.pagination = data.headers.link;
                    this.photos = _array.chunk(data.data, this.imagesPerRow);
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

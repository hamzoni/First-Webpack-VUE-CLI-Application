<template>
     <nav class="pagination is-centered" role="navigation" aria-label="pagination">

        <a class="pagination-previous"
            :disabled="!localPag.prev"
            @click="changePage(localPag.prev)"
        >Previous</a>
        <a class="pagination-next"
            :disabled="!localPag.next"
            @click="changePage(localPag.next)"
        >Next page</a>

        <ul class="pagination-list">

            <li><a class="pagination-link" aria-label="Goto page 1"
                v-if="localPag.first"
                @click="changePage(localPag.first)"
                v-text="localPag.first"
            >1</a></li>

            <li><span class="pagination-ellipsis"
                v-if="localPag.first"
            >&hellip;</span></li>

            <li><a class="pagination-link" aria-label="Goto page 45"
                v-if="localPag.prev"
                @click="changePage(localPag.prev)"
                v-text="localPag.prev"
            >45</a></li>

            <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page"
                v-if="localPag.current"
                @click="changePage(localPag.current)"
                v-text="localPag.current"
            >46</a></li>

            <li><a class="pagination-link" aria-label="Goto page 47"
                v-if="localPag.next"
                @click="changePage(localPag.next)"
                v-text="localPag.next"
            >47</a></li>

            <li><span class="pagination-ellipsis"
                v-if="localPag.last"
            >&hellip;</span></li>

            <li><a class="pagination-link" aria-label="Goto page 86"
                v-if="localPag.last"
                @click="changePage(localPag.last)"
                v-text="localPag.last"
            >86</a></li>

        </ul>
    </nav>
</template>
<script>
    export default {
        props: ['pagData', 'currentPage'],
        data() {
            return {
                localPagRaw: null,
            }
        },
        computed: {
            localPag() {
                let defaultPag = {
                    prev: 0, next: 0, current: 0, first: 0, last: 0
                }
                if (!this.pagData) return defaultPag;

                this.localPagRaw = (this.pagData + "").split(",");
                this.localPagRaw.forEach(pg => {
                    let name = pg.match(/(?!")(\w+)(?=")/g)[0];
                    let val = pg.match(/(?!page=)\d+/g)[0];
                    defaultPag[name] = val;
                });
                defaultPag.current = this.currentPage;
                return defaultPag;
            }
        },
        methods: {
            changePage(page) {
                this.$emit('changePage', page);
            }
        }
    }
</script>

<template>
    <div class="section">
        <slot>
            <noResult></noResult>
        </slot>
    </div>
</template>
<script>
    import NoResult from './NoResult.vue';

    export default {
        name: 'albumFrame',
        components: {
          'noResult': NoResult
        }
    }

</script>

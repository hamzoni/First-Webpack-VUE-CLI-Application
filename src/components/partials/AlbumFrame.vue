<template>
    <div id="albumFrame" class="section">
        <slot>
            <no-result></no-result>
        </slot>
    </div>
</template>
<script>
    import NoResult from './NoResult.vue';

    export default {
        name: 'albumFrame',
        components: {
          'no-result': NoResult
        }
    }

</script>

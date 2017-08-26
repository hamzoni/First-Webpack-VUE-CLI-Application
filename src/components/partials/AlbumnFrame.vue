<template>
    <div id="albumnFrame" class="section">
        <slot>
            <no-result></no-result>
        </slot>
    </div>
</template>
<script>
    import NoResult from './NoResult.vue';

    export default {
        name: 'albumnFrame',
        components: {
          'no-result': NoResult
        }
    }

</script>

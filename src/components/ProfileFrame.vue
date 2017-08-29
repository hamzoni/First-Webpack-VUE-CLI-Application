<template>
    <div class="section">
        <slot>
            <NoResult></NoResult>
        </slot>
    </div>
</template>
<script>
    import NoResult from './NoResult.vue';

    export default {
        name: 'profileFrame',
        components: {
          'NoResult': NoResult
        }
    }

</script>

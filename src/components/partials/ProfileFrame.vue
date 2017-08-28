<template>
    <div class="section">
        <slot>
            <no-result></no-result>
        </slot>
    </div>
</template>
<script>
    import NoResult from './NoResult.vue';

    export default {
        name: 'profileFrame',
        components: {
          'no-result': NoResult
        }
    }

</script>

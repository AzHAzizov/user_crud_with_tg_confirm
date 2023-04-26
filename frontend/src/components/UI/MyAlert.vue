<template>
    <div v-show="show">
        {{ message }}
        <my-button @click="close">
            X
        </my-button>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        variant: {
            mSeconds: String,
            required: true
        },
        show: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit("closeAlert", true);
        }
    },
    name: 'my-alert'
}
</script>




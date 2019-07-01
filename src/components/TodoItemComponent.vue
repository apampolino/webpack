<template>
    <li>{{ todo.item }}</li>
</template>

<script>
export default {
    name: 'TodoItemComponent',
    data () {
        return {

        }
    },
    props: {
        todo: {}
    },
    methods: {}
}
</script>

<style scoped>
</style>
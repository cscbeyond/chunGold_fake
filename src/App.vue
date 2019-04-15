<template>
    <div id="app">
        <Header></Header>
        <router-view />
    </div>
</template>
<script>
    import Header from './components/Header.vue';
    export default {
        mounted() {
            this.showLoading();
        },
        methods: {
            showLoading() {}
        },
        components: {
            Header,
        }
    }

</script>
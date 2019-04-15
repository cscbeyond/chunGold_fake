<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/reading">reading</router-link>
        </div> -->
        <Header></Header>
        <!-- <Loading></Loading> -->
        <router-view />
    </div>
</template>
<script>
    // import Loading from './components/Loading.vue'
    import Header from './components/Header.vue';
    export default {

        mounted() {
            this.showLoading();
        },
        methods: {
            showLoading() {
                // const loading = this.$loading({
                //     lock: true,
                //     text: 'Loading',
                //     spinner: 'el-icon-loading',
                //     background: 'rgba(0, 0, 0, 0.7)'
                // });
            }
        },
        components: {
            Header,
            // Loading
        }
    }

</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

</style>

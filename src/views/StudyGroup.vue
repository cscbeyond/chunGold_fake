<template>
    <div class="study-group">
        <div class="sub-nav">首页 / 学习小组</div>
        <div class="left">
            left
        </div>
        <div class="right">
            right
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer'
    export default {
        components: {
            Footer
        }
    };

</script>

<style lang="less">
    .row {
        display: flex;

    }

    .study-group {
        margin: 30px auto;

        .sub-nav {
            text-align: left;
        }
    }

</style>

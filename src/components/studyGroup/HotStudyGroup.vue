<template>
    <div class="hot-study-group" :class="'col-'+itemRow">
        <div class="img-box">
            <img :src="itemContent.imgSrc" :alt="itemContent.name">
        </div>
        <div class="des">
            <p class="title">
                {{itemContent.name}}
            </p>
            <div>
                <i class="iconfont icon-pinglun"></i><em>{{itemContent.num}}</em>
                <i class="iconfont icon-qunzu"></i><em>{{itemContent.comment}}</em>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            itemContent: {
                type: Object,
                default: {}
            },
            itemRow: {
                type: Number,
                default: 1
            }
        },
        mounted() {
            console.log(this.itemRow);
        }
    }

</script>

<style lang="less" scoped>
    .hot-study-group {
        width: 33%;
        display: inline-block;
        margin-bottom: 10px;

        .img-box {
            float: left;
            border: 1px solid #ccc;
            max-width: 50px;
            max-height: 50px;

            img {
                width: 100%;
                height: 100%;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        .des {
            vertical-align: top;
            padding-left: 55px;
        }

    }

    .col-1 {
        width: 100%;
    }

    .col-2 {
        width: 50%;
    }

    .col-3 {
        width: 33%;
    }

</style>

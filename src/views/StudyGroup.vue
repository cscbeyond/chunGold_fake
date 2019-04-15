<template>
    <div class="study-group">
        <div class="sub-nav">首页 / 学习小组</div>
        <div class="content clearfix">
            <div class="left">
                <div class="hot-group-list">
                    <h3 class="title">热门小组</h3>
                    <div class="item-list">
                        <hot-study-group :itemRow="3" :itemContent='item' v-for="item in hotStudyGroupList" :key="item.id">
                        </hot-study-group>
                    </div>
                </div>
                <div class="recent-topic">
                    <h3 class="title">最近话题</h3>
                    暂无
                </div>
            </div>
            <div class="right">
                 <div class="search">
                    <input type="text" placeholder="小组搜索">
                </div>
                <div class="new-group">
                    <h3 class="title">新晋小组</h3>
                    <hot-study-group :itemRow="1" :itemContent='item' v-for="item in newStudyGroupList" :key="item.id"></hot-study-group>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../components/Footer'
    import HotStudyGroup from '../components/studyGroup/HotStudyGroup.vue'
    export default {
        components: {
            Footer,
            HotStudyGroup
        },
        data() {
            return {
                hotStudyGroupList: [{
                        id:1,
                        name: '前端小分队',
                        num: 1222,
                        comment: 33,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    },
                    {
                        id:2,
                        name: '后台小分队',
                        num: 542,
                        comment: 533,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    },
                    {
                        id:3,
                        name: 'UI小分队',
                        num: 650,
                        comment: 98,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    },
                    {
                        id:4,
                        name: 'JAVA小分队',
                        num: 650,
                        comment: 98,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    },
                    {
                        id:5,
                        name: 'Python小分队',
                        num: 650,
                        comment: 98,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    }
                ],
                newStudyGroupList: [{
                        id:1,
                        name: '前端小分队',
                        num: 1222,
                        comment: 33,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    },
                    {
                        id:2,
                        name: '后台小分队',
                        num: 542,
                        comment: 533,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    },
                    {
                        id:3,
                        name: 'UI小分队',
                        num: 650,
                        comment: 98,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    },
                    {
                        id:4,
                        name: 'JAVA小分队',
                        num: 650,
                        comment: 98,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    },
                    {
                        id:5,
                        name: 'Python小分队',
                        num: 650,
                        comment: 98,
                        imgSrc: 'https://chensc.club/static/assets/images/defaultAvatar.jpg',
                    }
                ],

            }
        }
    };

</script>

<style lang="less" scoped>
    .study-group {
        background-color: #f5f5f5;
        .sub-nav {
            text-align: left;
        }

        .content {
            margin: 30px;
            .left {
                float: left;
                width: 66%;
                border: 1px solid #ccc;
                .title {
                    color: #313131;
                    font-size: 16px;
                    text-align: left;
                    padding: 5px 0;
                    margin-bottom: 10px;
                }
                .hot-group-list,.recent-topic,.search{
                    background-color: #fff;
                    margin-top: 30px;
                    padding: 0 30px;
                }
                .search{
                    input{
                        width: 100%;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        padding: 5px;
                    }
                }
            }
            .right {
                float: left;
                width: 33%;
                border: 1px solid #ccc;
                .search, .new-group{
                    margin-bottom: 30px;
                    background-color: #fff;
                }
                .new-group .title {
                    color: #313131;
                    font-size: 16px;
                    text-align: left;
                    padding: 5px 0;
                    margin-bottom: 10px;
                }
            }
        }
    }

</style>

<template>
    <div class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/course">课程</el-menu-item>
            <el-submenu index="2">
                <template slot="title">hasSub</template>
                <el-menu-item index="/reading">阅读</el-menu-item>
                <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
                <!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
                <el-submenu index="2-4">
                    <template slot="title">hasSub</template>
                    <el-menu-item index="2-4-1">学习小组</el-menu-item>
                    <!-- <el-menu-item index="2-4-2">选项2</el-menu-item> -->
                    <!-- <el-menu-item index="2-4-3">选项3</el-menu-item> -->
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/vipzone">会员专区</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
            <div class="nav-right">
                <input class="header-search" type="text" placeholder="搜索">
                <el-menu-item class="self-define-nav" index="/login">登录</el-menu-item>
                <el-menu-item class="self-define-nav" index="/register">注册</el-menu-item>
            </div>
        </el-menu>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$router.push(key);
            }
        }
    }

</script>

<style lang="less" scoped>
    .header {
        .nav-right {
            float: right;
            width: 250px;
        }
        .header-search {
			border: 1px solid #ccc;
			border-radius: 8px;
			padding: 5px;
			text-indent: 1em;
            display: inline-block;
            width: 30%;
        }
        .self-define-nav {
            display: inline-block;
            width: 30%;
        }
    }

</style>

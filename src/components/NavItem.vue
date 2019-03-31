<template>
    <el-menu-item
            :index="navData.name"
            v-if="!(navData.children && navData.children.length)">
        <span slot="title">{{navData.name}}</span>
    </el-menu-item>
    <el-submenu
            :index="navData.name" v-else>
        <template slot="title">{{navData.name}}</template>
        <nav-item
                v-for="(item, index) of navData.children"
                :key="index"
                :navData="item"></nav-item>
    </el-submenu>
</template>

<script>

export default {
    name: 'NavItem',
    props: {
        navData: Object
    },
    methods: {
    }
}
</script>

<style scoped>

</style>

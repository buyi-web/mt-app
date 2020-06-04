<template>
    <el-container class="layout-default">
        <el-header>
            <mt-header />
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
import mtHeader from '@/components/header/index.vue'
export default {
    components: {
        mtHeader
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>
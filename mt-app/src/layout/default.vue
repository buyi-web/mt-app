<template>
    <el-container class="layout-default">
        <el-header height="">
            <mt-header />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer height="">
            <mt-footer />
        </el-footer>
    </el-container>
</template>

<script>
import mtHeader from '@/components/header/index.vue'
import mtFooter from '@/components/footer/index.vue'
export default {
  components: {
    mtHeader,
    mtFooter
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>

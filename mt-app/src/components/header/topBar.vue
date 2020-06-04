<template>
    <el-row class="m-header-topbar m-header">
        <el-col :span="10">
            <geo />
        </el-col>
        <el-col :span="14">
            <mt-nav />
        </el-col>
    </el-row>
</template>

<script>
import geo from './geo.vue'
import mtNav from './nav.vue'
export default {
    components:{
        geo,
        mtNav
    }
}
</script>

<style lang="scss">
 @import "@/assets/css/public/header/topbar.scss";
</style>
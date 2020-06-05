<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <mt-menu />
            </el-col>
            <el-col :span="19">
                <mt-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :nav="iStyle" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :nav="recomment"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MtMenu from '@/components/index/menu.vue'
import MtLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
export default {
   components: {
        MtMenu,
        MtLife,
        Container,
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/index/index.scss";
</style>
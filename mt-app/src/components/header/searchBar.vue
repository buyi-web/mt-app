<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                 <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="搜索商家和地点"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                </div>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchWord: ''
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/public/header/index.scss";
    @import "@/assets/css/public/header/search.scss";
</style>
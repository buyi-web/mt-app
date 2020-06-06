<template>
    <div>
        <div class="page-changeCity">
            <el-row>
                <province />
            </el-row>
            <el-row>
            <hot title="热门城市:" :list="hotList" />
            </el-row>
            <el-row>
            <hot title="最近访问:" :list="rencentList" />
            </el-row>
            <el-row>
                <category />
            </el-row>
        </div>
    </div>
</template>
<script>
import hot from "@/components/changeCity/hot.vue"
import Category from '@/components/changeCity/category.vue'
import Province from '@/components/changeCity/province.vue'
import api from '@/api/index.js'
export default {
    components: {
        Province,
        hot,
        Category
    },
    data(){
        return {
            hotList: [],
            rencentList: []
        }
    },
    created(){
        api.getHotCity().then(res=> {
            if (res.data.status === 'success') {
                this.hotList = res.data.data.map((item) => item.name);
            }
        });
        api.getRecentCity().then(res => {
              if (res.data.status === 'success') {
                this.rencentList = res.data.data.map((item) => item.name);
            }
        })
    }
}
</script>
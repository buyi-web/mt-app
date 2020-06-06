<template>
    <div class="m-istyle">
        <dl :class="nav.class" @mouseover="over">
            <dt>{{nav.title}}</dt>
            <dd v-for="(item, index) in nav.list" :key="index" :class="{active: kind == item.tab}" :data-type="item.tab">
                {{item.text}}
            </dd>
        </dl>
         <ul class="ibody">
            <li v-for="(item, index) in list[kind]" :key="index">
            <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.image" class="image">
            <div class="cbody">
                <div class="title" :title="item.title">{{item.title}}</div>
                <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
                <div class="price-info">
                    <span class="current-price-wrapper">
                        <span class="price-symbol numfont">¥</span>
                        <span class="current-price numfont">{{item.price}}</span>
                        <span class="units">/人均</span>
                    </span>
                </div>
            </div>
            </el-card>
            </li>
        </ul>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    props: ['nav'],
    data(){
        return {
            kind: 'all',
            list: {}
        }
    },
    methods: {
        over(e){
            let dom = e.target;
            let tagName = dom.tagName.toLowerCase();
            if (tagName != "dd") {
                return false;
            }
            this.kind = dom.getAttribute("data-type");
            //请求数据，不同的tab展示不同的内容

        }
    },
    created() {
        api.resultsByKeywords().then((res) => {
            this.list = res.data.data;
        })
    }
}
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="item in list" :key="item">
                <a :href="'city-'+item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="(citySet, key) in cityGroup" :key="key" :id="'city-'+key">
            <dt>{{key}}</dt>
            <dd>
                <span  v-for="city in citySet" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityList: [],
            cityGroup: {},
        }
    },
    created() {
        api.getCityList().then((res) => {
            let data = res.data.data;
            let obj = {};
            data.forEach((item, index) => {
                if (!obj[item.firstChar.toUpperCase()]) {
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);
            });
            this.cityGroup = obj;
        })
    },
    methods: {
        changeCity(city){

        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/categroy.scss";
</style>
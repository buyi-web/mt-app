<template>
    <div>
        <span class="name">按省份选择:</span>
        <mt-select
        :list="provinceList"
        title="省份"
        chooseClass="province"
        :value="province"
        :showWrapperActive="provinceActive"
        @change_active="changeProvinceActive"
        @change="changeProvince"
        />
    </div>
</template>
<script>
import MtSelect from './select.vue'
import api from '@/api/index.js';
export default {
    data(){
        return {
            provinceList: []
        }
    },
    created(){
        api.getProvinceList().then((res) => {
            if (res.data.status == 'success') {
            this.provinceList = res.data.data.map((item) => {
            item.name = item.provinceName;
            return item;
            });
        }
        })
    },
    components: {
        MtSelect
    },
    methods: {
        changeProvinceActive(flag) {
            this.provinceActive = flag;
            if (flag) {
                this.cityActive = false;
            }
        },
        changeCityActive(flag) {
            this.cityActive = flag;
            if (flag) {
                this.provinceActive = false;
            }
        },
        changeProvince(item) {
            this.province = item.name;
            this.cityList = item.cityInfoList;
            this.disabledCity = false;
        },
        changeCity(item) {
            this.city = item.name;
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'index'})
        },
    }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
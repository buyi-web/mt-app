<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家和地点"
            @focus="inputFocus"
            @blur="inputBlur"
            @input="inputWord"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isFocus">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="item + '_'+ index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
                <dd v-for="(item, index) in searchList" :key="index">
                    <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: ['火锅', '烧烤', '自助餐'],
      searchList: ['麻辣烫', '火锅', '烧烤', '自助餐', '烤全羊']
    }
  },
  methods: {
    inputFocus () {
      this.isFocus = true
    },
    inputBlur () {
      this.isFocus = false
    },
    inputWord(){
        api.getSearchList().then((res) => {
            if (res.data.status === 'success') {
                this.searchList = res.data.data.list.slice(0,5);
            }
        });
    }
  },
  computed: {
    isHotPlace () {
      return !this.searchWord && this.isFocus
    },
    isSearchList () {
      return this.searchWord && this.isFocus
    }
  },
  created () {
    api.getSearchHotList().then((res) => {
    //   console.log(res)
      if (res.data.status === 'success') {
        this.hotPlaceList = res.data.data
        this.suggestList = res.data.data
      }
    })
  }
}
</script>

<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(menu,index) in menuList" :key="index" @mouseenter="menuEnter(menu)">
        <i :class="menu.type"></i>
        {{menu.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="menuDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item, index) in menuDetail.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v, i) in item.items" :key="v + '_'+ i">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      menuList: [],
      menuDetail: null,
      timer: null
    };
  },
  created() {
    api.getMenuList().then(res => {
      if (res.data.status == "success") {
        this.menuList = res.data.data;
      }
    });
  },
  methods: {
    menuEnter(menu) {
      this.menuDetail = menu;
    },
    menuLeave(){
        this.timer = setTimeout(()=>{
            this.menuDetail = null;
        }, 16.7)
    },
    detailEnter(){
        clearTimeout(this.timer);
    },
    detailLeave(){
        this.menuDetail = null;
    }
  }
};
</script>
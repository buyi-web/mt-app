<template>
    <div 
    :class="['choose-wrap', disabled?'disbaled-wrap':'']"
    @click="showWrapper"
    v-document-click="documentClick"
    >
        <div :class="['choose', chooseClass + '-choose']">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div class="mt-content" :class="{active: showWrapperActive}">
                <h2>{{title}}</h2>
                <div class="wrapper">
                    <div class="col" v-for="(col,index) in colList" :key="index">
                        <span class="mt-item" :class="{active: item == value}"
                        v-for="(item, index) in col" :key="index"
                        @click="changeValue(item)"
                        >{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "list",
        "title",
        "value",
        "showWrapperActive",
        "disabled",
        "chooseClass"
    ],
    methods: {
        showWrapper(e){
            if (this.disabled) {
            return false;
            }
            e.stopPropagation();
            // this.showWrapperActive = true;
            this.$emit("change_active", true);
        },
        changeValue(value){
            this.$emit("change", value)
        },
        documentClick() {
        this.$emit("change_active", false);
        }
    },
    computed: {
        colList(){
            let col = Math.ceil(this.list.length / 12);
            let result = [];
            for (var i = 0; i < col; i++) {
                result.push(this.list.slice(i * 12, i * 12 + 12));
            }
            return result;
        }
    },
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
.disbaled-wrap {
  cursor: not-allowed;
}
.choose-wrap.disbaled-wrap > .choose {
  cursor: not-allowed;
}
</style>

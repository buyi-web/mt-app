<template>
    <div 
    :class="['choose-wrap', disabled?'disbaled-wrap':'']"
    @click="showWrapper"
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
    data(){
        return {

        }
    },
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
        }
    }
}
</script>

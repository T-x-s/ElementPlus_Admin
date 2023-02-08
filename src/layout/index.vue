<template>
    <n-layout has-sider>
        <n-layout-sider bordered :inverted="false" collapse-mode="width" :collapsed="isCollapse" @collapse="isCollapse = true"
        @expand="isCollapse = false" :collapsed-width="48"
            :native-scrollbar="false" :width="200">
            <Menu :isCollapse="isCollapse"></Menu>
        </n-layout-sider>
        <n-layout>
            <n-layout-header bordered>
                <Header @change-collapse="getCollapse"></Header>
            </n-layout-header>
            <n-layout-content bordered :native-scrollbar="false">
                <Content></Content>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script setup>
import { ref } from "vue"
import Menu from "./Menu/index.vue"
import Header from "./Header/index.vue"
import Content from "./Content/index.vue"

/* 折叠 */
let isCollapse = ref(false);
function getCollapse(e) {
    isCollapse.value = e.value;
}

</script>
<style lang='scss' scoped>

</style>
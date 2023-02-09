<template>
    <div class="menu-logo">
        <img src="@/assets/icons/vue.svg" alt="logo" class="icon">
        <span v-show="!isCollapse">Element-Admin</span>
    </div>
    <!-- <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper"> -->
    <el-scrollbar>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <span>Navigator Four</span>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>
<script setup>
import { h, ref } from "vue";
// import { NIcon, useMessage } from "naive-ui";
import { RouterLink } from "vue-router";
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}

// const props = defineProps({
//     isCollapse: Boolean
// })
const isCollapse = ref(false)

// let collapsed = ref(false)
</script>
<style lang='scss' scoped>
.menu-logo {
    height: 50px;
    border-bottom: solid 1px var(--n-border-color);
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
        width: 36px;
        height: 36px;
    }

    span {
        font-weight: 700;
        font-size: 18px;
        opacity: 1;
        overflow: hidden;
        white-space: nowrap;
        margin-left: 10px;
    }
}
</style>
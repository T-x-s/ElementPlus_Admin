<template>
    <div class="header">
        <div class="header-left">
            <div class="hamburger-container" @click="handleFold">
                <n-icon>
                    <Hamburger :isActive="!collapsed"></Hamburger>
                </n-icon>
            </div>
            <div class="">
                <n-breadcrumb>
                    <n-breadcrumb-item>首页</n-breadcrumb-item>
                </n-breadcrumb>
            </div>
        </div>
        <div class="header-right">
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <div class="search right-item">
                        <img src="@//assets/icons/search.svg" alt="搜索" class="right-icon">
                    </div>
                </template>
                <span>搜索</span>
            </n-tooltip>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <div class="github right-item" @click="handleJump">
                        <img src="@/assets/icons/github.svg" alt="github" class="right-icon">
                    </div>
                </template>
                <span>github</span>
            </n-tooltip>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <div class="zoom right-item" @click="toggle">
                        <img v-show="isFullscreen" src="@/assets/icons/narrow.svg" alt="缩放" class="right-icon">
                        <img v-show="!isFullscreen" src="@/assets/icons/enlarge.svg" alt="缩放" class="right-icon">
                    </div>
                </template>
                <span>全屏</span>
            </n-tooltip>
            <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                    <div class="typeface right-item">
                        <img src="@/assets/icons/typeface.svg" alt="字体" class="right-icon">
                    </div>
                </template>
                <span>布局</span>
            </n-tooltip>
            <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                <div class="avatar right-item">
                    <div class="avatar-wrapper">
                        <img src="@/assets/images/avatar.jpg" alt="头像" class="use-avatar">
                        <i class="icon-caret-bottom"></i>
                    </div>
                </div>
            </n-dropdown>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFullscreen } from '@vueuse/core';
import { NDialogProvider, useDialog, useMessage } from 'naive-ui';
import Hamburger from "@/components/Hamburger/index.vue"
const emits = defineEmits(['changeCollapse'])

/* github跳转 */
function handleJump() {
    window.open("https://github.com/T-x-s/vue3_practice");
}
/* 缩放 */
const { isFullscreen, toggle } = useFullscreen();
let collapsed = ref(false);
function handleFold() {
    collapsed.value = !collapsed.value;
    emits('changeCollapse', collapsed);
}

/* 头像区 */
const dialog = useDialog()
const router = useRouter();
const message = useMessage();
const options = [
    {
        label: "个人设置",
        key: 1
    },
    {
        label: "退出登录",
        key: 2
    }
]
function handleLogout() {
    dialog.info({
        title: '警告',
        content: '您确定要退出登录吗？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
            router.push('/');
        },
        onNegativeClick: () => {
            message.info('取消退出登录')
        }
    })
}
const handleSelect = (key) => {
    switch (key) {
        case 1:
            router.push('/');
            break;
        case 2:
            handleLogout();
            break;
    }
}

</script>
<style lang='scss' scoped>
.header {
    display: flex;
    justify-content: space-between;
    height: 49px;
    box-shadow: 0 1px 4px #00152914;

    &-left {
        display: flex;
        align-items: center;
        justify-content: center;

        .hamburger-container {
            padding: 0px 15px;
            cursor: pointer;
        }
    }

    &-right {
        display: flex;
        align-items: center;
        justify-content: center;

        .avatar {
            margin-right: 30px;

            &-wrapper {
                // margin-top: 5px;
                position: relative;

                .use-avatar {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }

                .icon-caret-bottom {
                    cursor: pointer;
                    position: absolute;
                    right: -20px;
                    top: 30px;
                    width: 0;
                    height: 0;
                    border: 6px solid transparent;
                    border-bottom: none;
                    border-top-color: #5a5e66;
                }
            }
        }
    }
}

.right-item {
    padding: 0 12px;
    color: #5a5e66;
    vertical-align: text-bottom;
}

.right-icon {
    height: 16px;
    width: 16px;
    cursor: pointer;
}
</style>
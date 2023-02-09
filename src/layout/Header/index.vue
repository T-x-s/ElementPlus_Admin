<template>
    <div class="header">
        <div class="header-left">
            <div class="hamburger-container" @click="handleFold">
                <Hamburger :isActive="!collapsed"></Hamburger>
            </div>

        </div>
        <div class="header-right">
            <el-tooltip placement="bottom" effect="dark" trigger="hover">
                <template #content>
                    <span>搜索</span>
                </template>
                <div class="search right-item">
                    <img src="@/assets/icons/search.svg" alt="搜索" class="right-icon">
                </div>
            </el-tooltip>
            <el-tooltip placement="bottom" effect="dark" trigger="hover">
                <template #content>
                    <span>github</span>
                </template>
                <div class="github right-item" @click="handleJump">
                    <img src="@/assets/icons/github.svg" alt="github" class="right-icon">
                </div>
            </el-tooltip>
            <el-tooltip placement="bottom" effect="dark" trigger="hover">
                <template #content>
                    <span>全屏</span>
                </template>
                <div class="zoom right-item" @click="toggle">
                    <img v-show="isFullscreen" src="@/assets/icons/narrow.svg" alt="缩放" class="right-icon">
                    <img v-show="!isFullscreen" src="@/assets/icons/enlarge.svg" alt="缩放" class="right-icon">
                </div>
            </el-tooltip>
            <el-tooltip placement="bottom" effect="dark" trigger="hover">
                <template #content>
                    <span>布局</span>
                </template>
                <div class="typeface right-item">
                    <img src="@/assets/icons/typeface.svg" alt="字体" class="right-icon">
                </div>
            </el-tooltip>
            <el-dropdown trigger="click" @command="handleCommand">
                <div class="avatar right-item">
                    <div class="avatar-wrapper">
                        <img src="@/assets/images/avatar.jpg" alt="头像" class="use-avatar">
                        <i class="icon-caret-bottom"></i>
                    </div>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item :command="1">个人中心</el-dropdown-item>
                        <el-dropdown-item :command="2">布局设置</el-dropdown-item>
                        <el-dropdown-item divided :command="3">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFullscreen } from '@vueuse/core';
import { ElMessage, ElMessageBox } from 'element-plus'
import Hamburger from "@/components/Hamburger/index.vue"
// const emits = defineEmits(['changeCollapse'])

// /* github跳转 */
function handleJump() {
    window.open("https://github.com/T-x-s/vue3_practice");
}
// /* 缩放 */
const { isFullscreen, toggle } = useFullscreen();
let collapsed = ref(false);
function handleFold() {
    // collapsed.value = !collapsed.value;
    // emits('changeCollapse', collapsed);
}

const router = useRouter();
function handleLogout() {
    ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        router.push('/login');
    }).catch(() => { });
}

const handleCommand = (key) => {
    switch (key) {
        case 1:
            router.push('/');
            break;
        case 2:
            router.push('/');
            break;
        case 3:
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
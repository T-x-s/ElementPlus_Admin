<template>
    <div class="menu">
        <div class="menu-logo">
            <img src="@/assets/icons/vue.svg" alt="logo" class="icon">
            <span v-show="!isCollapse">Naive-Admin</span>
        </div>
        <div class="menu-content">
            <n-menu :options="menuOptions" :collapsed="isCollapse" :root-indent="18" default-value="dashboard"
                @update:value="handleUpdateValue" />
        </div>
    </div>
</template>
<script setup>
import { h, ref } from "vue";
import { NIcon, useMessage } from "naive-ui";
import { RouterLink } from "vue-router";
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon,
    HomeOutline as HomeIcon
} from "@vicons/ionicons5";

const props = defineProps({
    isCollapse: Boolean
})

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    path: '/dashboard'
                }
            },
            { default: () => "首页" }
        ),
        key: "dashboard",
        icon: renderIcon(HomeIcon)
    },
    {
        label: "文档",
        key: "file",
        icon: renderIcon(BookIcon),
        children: [
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            path: '/file'
                        }
                    },
                    { default: () => "Vue文档" }
                ),
                key: "Vue"
            }
        ]
    }
];
function handleUpdateValue(key, item) {
    // console.log(key)
    // console.log(item)
    // window.$message.info("[onUpdate:value]: " + JSON.stringify(key));
    // window.$message.info("[onUpdate:value]: " + JSON.stringify(item));
}

let collapsed = ref(false)
</script>
<style lang='scss' scoped>
.menu {
    height: 100vh;

    &-logo {
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
}
</style>
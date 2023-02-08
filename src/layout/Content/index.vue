<template>
    <div class="content">
        <!-- <div v-for="item in 100" :key="item">{{ item }}</div> -->
        <router-view></router-view>
    </div>
</template>
<script setup>
import { RouterView } from "vue-router";
</script>
<style lang='scss' scoped>
.content {
    height: 100vh;
    padding: 0 10px 10px;
    background-color: #f5f5f5;
}
</style>
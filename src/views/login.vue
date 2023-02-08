<template>
    <div class="bg">
        <div class="bg-form">
            <h3 class="title">某个后台管理系统</h3>
            <el-form ref="loginRef" :model="form" :rules="rules">
                <el-form-item prop="userName">
                    <el-input :prefix-icon="UserFilled" v-model="form.userName" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input :prefix-icon="Lock" type="password" show-password v-model="form.password" />
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 100%;" type="primary" :loading="loading"
                        @click.prevent="handleValidateLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup name="login">
import { ref, reactive, getCurrentInstance } from 'vue';
import { useRouter } from "vue-router";
import { UserFilled, Lock } from '@element-plus/icons-vue';
const { proxy } = getCurrentInstance()
let loading = ref(false);
/* 
    登录逻辑
*/
const form = reactive({
    userName: "admin",
    password: ""
})
const rules = reactive({
    userName: { required: true, message: '请输入账号', trigger: 'blur' },
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 18, message: '长度不能小于6或大于18', trigger: 'blur' }
    ]
})

const $router = useRouter();
function handleValidateLogin() {
    proxy.$refs.loginRef.validate((valid, fields) => {
        if (valid) {
            // $router.push({
            //     path: "dashboard"
            // });
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>

<style lang='scss' scoped>
.bg {
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/4k.png");
    /* 背景图垂直、水平均居中 */
    background-position: center center;
    /* 背景图不平铺 */
    background-repeat: no-repeat;
    /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
    background-attachment: fixed;
    /* 让背景图基于容器大小伸缩 */
    background-size: cover;
    /* 设置背景颜色，背景图加载过程中会显示背景色 */
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;

    &-form {
        border-radius: 6px;
        background-color: #fff;
        width: 400px;
        padding: 25px 25px 5px 25px;

        .title {
            text-align: center;
            color: #707070;
            margin: 0 auto 30px auto;
        }

        .input-icon {
            margin-right: 5px;
            margin-left: 0px;
        }
    }
}
</style>
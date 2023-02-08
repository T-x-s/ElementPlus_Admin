import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss' // global css
// svg图标
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)
/* 全局组件挂载 */
app.component('svg-icon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')

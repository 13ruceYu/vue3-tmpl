import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import router from './router/index'

import './style/index.less'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(Antd)
app.mount('#app')

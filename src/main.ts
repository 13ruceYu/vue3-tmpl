import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router/index'

import './style/index.less'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(Antd)
app.mount('#app')

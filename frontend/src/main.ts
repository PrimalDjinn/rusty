import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import './assets/css/style.css'
import App from './App.vue'
import {router} from "./routes.ts"

const app = createApp(App)

app.use(ui)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// tailwind
import './index.css'
// pwa
import './registerServiceWorker'
// component
import ChokButton from '@/components/common/ChokButton.vue'

const app = createApp(App)

app.component('ChokButton', ChokButton)

app.use(router)
app.mount('#app')

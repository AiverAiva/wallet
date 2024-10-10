import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
console.log(CLIENT_ID)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: CLIENT_ID,
})

app.mount('#app')

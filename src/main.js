import { createApp } from 'vue'
import './styles/general.scss'
import App from './App.vue'

// Utilizzo del router nel main file (main.js)
import router from './router';




createApp(App).use(router).mount('#app')

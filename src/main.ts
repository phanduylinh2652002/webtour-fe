import './assets/css/bootstrap.min.css'
import './assets/css/aos.css'
import './assets/css/style.css'
import './assets/css/daterangepicker.css'
import './assets/css/styleLogin.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/fonts/icomoon/style.css'
import './assets/fonts/flaticon/font/flaticon.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

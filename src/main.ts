import './assets/css/bootstrap.min.css'
import './assets/css/aos.css'
import './assets/css/style.css'
// import './assets/css/daterangepicker.css'
import './assets/css/styleLogin.css'
// import './assets/css/jquery.fancybox.min.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/fonts/icomoon/style.css'
// import './assets/fonts/flaticon/font/flaticon.css'
// import './assets/js/aos.js'
// import './assets/js/custom.js'
// import './assets/js/bootstrap.min.js'
// import './assets/js/daterangepicker.js'
// import './assets/js/jarallax.min.js'
// import './assets/js/jquery-3.4.1.min.js'
// import './assets/js/moment.min.js'
// import './assets/js/owl.carousel.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

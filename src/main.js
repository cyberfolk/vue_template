import { createApp } from 'vue'
import { router } from './router.js'
import './assets/styles/general.scss'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

/* import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { faXmarkCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faGithub, faLinkedinIn, faTelegram, faXmarkCircle, faCircleXmark, faHeart, faMagnifyingGlass, faX) */

//createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
createApp(App).use(router).mount('#app')
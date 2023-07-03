import { createApp } from 'vue'
import App from './App.vue'



/*UI Library Yang Harus Di Import*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios';
import router from './router'

// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)

const app = createApp(App).use(router);
app.config.globalProperties.$http = axios;

app.mount('#app');

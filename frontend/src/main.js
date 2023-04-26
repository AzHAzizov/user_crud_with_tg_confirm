
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI/index'
import axios from 'axios'




const app = createApp(App)



axios.defaults.baseURL = process.env.VUE_APP_API_URL;
components.map(component => {
    app.component(component.name, component)
})


app.use(store).use(router).mount('#app')

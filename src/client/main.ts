import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'
import { router } from "./router";
import { createPinia } from "pinia";

const app = createApp(App)
const pinia = createPinia()

app
    .use(pinia)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .mount("#app");

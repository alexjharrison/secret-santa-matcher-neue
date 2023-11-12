import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-dark-blue/theme.css'

const app = createApp(App)

app
    .use(PrimeVue, { ripple: true })
    .mount("#app");

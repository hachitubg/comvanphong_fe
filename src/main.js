import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$http = axios;
axios.defaults.baseURL = "http://localhost:8080"; // Địa chỉ của API backend

app.use(router);
app.mount("#app");

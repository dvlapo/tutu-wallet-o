import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/style.css";
import "./assets/global.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

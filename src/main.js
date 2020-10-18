import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

import "./assets/app.scss";
import "popper.js";
import "bootstrap";


createApp(App)
  .use(router)
  .mount("#app");

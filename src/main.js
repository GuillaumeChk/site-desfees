import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import langFr from "quasar/lang/fr";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
	plugins: {}, // import Quasar plugins and add here
	lang: langFr,
});

app.mount("#app");

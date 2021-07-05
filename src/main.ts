import { createApp } from "vue";
import App from "./App.vue";
import { RouteName } from "./constants/route-names";
import router from "./router";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$routeName = RouteName;
app.mount("#app");

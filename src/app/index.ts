import { createApp } from "vue";
import { router, store } from "./providers";
import App from "./index.vue";
import getGlobalComponents from "./globalComponents";
import "./index.scss";
import "@svgstore";

const app = createApp(App);

getGlobalComponents(app);

app.use(router);
app.use(store);

export { app };

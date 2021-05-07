import { ViteSSG } from "vite-ssg";
import routes from "virtual:generated-pages";
import App from "./App.vue";
import "virtual:windi-base.css";
import "virtual:windi-utilities.css";
import "virtual:windi-devtools";
import "@css/atlas.css";

export const createApp = ViteSSG(App, { routes });

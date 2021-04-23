import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import initLazyLoad from "@js/initLazyLoad.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    initLazyLoad();
});

export default router;

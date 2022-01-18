import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";
import HmrEvent from "./src/plugins/vite-plugin-hmr";
import ViteRestart from "./src/plugins/vite-plugin-restart";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@js": resolve(__dirname, "./src/assets/js"),
            "@css": resolve(__dirname, "./src/assets/css"),
            "@components": resolve(__dirname, "./src/components"),
            "@sections": resolve(__dirname, "./src/sections"),
            "@pages": resolve(__dirname, "./src/pages"),
        },
    },
    plugins: [
        Vue({
            include: [/\.vue$/],
        }),
        Pages({
            extensions: ["vue"],
        }),
        WindiCSS(),
        HmrEvent(),
        ViteRestart({
            restart: ["src/pages/*.vue", "./windi.config.js"],
        }),
        AutoImport({
            include: [/\.vue$/, /\.vue\?vue/],
            imports: ["vue", "vue-router"],
        }),
        Components({
            extensions: ["vue"],
            dirs: ["src/components", "src/sections"],
            deep: false,
        }),
    ],
    ssgOptions: {
        entry: "src/main.js",
        script: "async",
        formatting: "prettify",
        includedRoutes(routes) {
            return routes.filter(i => !i.includes("index"));
        },
        onPageRendered(route, html) {
            console.log(`Processing ${route}...`);
            return html
                .replaceAll(/<!--[\s\S]*?-->/g, "")
                .replaceAll("/images", "${d40.images_folder}")
                .replaceAll("/icons", "${d40.icons_folder}");
        },
    },
    server: {
        fs: {
            allow: [".."],
        },
        host: true,
    },
});

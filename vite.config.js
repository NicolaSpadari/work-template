import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import ViteComponents from "vite-plugin-components";
import HmrEvent from "./src/plugins/vite-plugin-hmr";
import FullRestart from "./src/plugins/vite-plugin-restart";
import WindiCSS from "vite-plugin-windicss";
import { resolve } from "path";

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
        FullRestart("pages"),
        ViteComponents({
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
            return routes.filter((i) => !i.includes("sitemap"));
        },
        onPageRendered(route, html) {
            console.log(`Processing ${route}...`);
            return html
                .replaceAll(/<!--[\s\S]*?-->/g, "")
                .replaceAll("/images", "${images_folder}")
                .replaceAll("/icons", "${icons_folder}");
        },
    },
});

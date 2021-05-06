import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import ViteComponents from "vite-plugin-components";
import HmrEvent from "./src/plugins/vite-plugin-hmr";
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
        vue(),
        Pages({
            extensions: ["vue"],
        }),
        HmrEvent(),
        ViteComponents({
            dirs: ["src/components", "src/sections"],
            deep: false,
        }),
    ],
});

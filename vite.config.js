import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import { resolve } from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@js": resolve(__dirname, "./src/assets/js"),
            "@css": resolve(__dirname, "./src/assets/css"),
            "@images": resolve(__dirname, "./src/assets/images"),
            "@icons": resolve(__dirname, "./src/assets/icons"),
            "@components": resolve(__dirname, "./src/components"),
            "@pages": resolve(__dirname, "./src/pages"),
        },
    },
    plugins: [
        vue(),
        Pages({
            extensions: ["vue"],
        }),
    ],
});

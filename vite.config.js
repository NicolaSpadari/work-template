import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import path from "path";

export default defineConfig({
    alias: {
        "@": path.resolve(__dirname, "./src"),
        "@js": path.resolve(__dirname, "./src/assets/js"),
        "@css": path.resolve(__dirname, "./src/assets/css"),
        "@images": path.resolve(__dirname, "./src/assets/images"),
        "@icons": path.resolve(__dirname, "./src/assets/icons"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
    },
    plugins: [
        vue(),
        Pages({
            extensions: ["vue"],
        }),
    ],
});

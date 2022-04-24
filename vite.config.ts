import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";

import type { Resolver } from "unplugin-auto-import/types";

const initResolver: Resolver = (name: string): string | void => {
	if (name.startsWith("init")) {
        return `@/inits/${name}`;
    }
};

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [
        Vue({
            include: [/\.vue$/]
        }),
        Pages({
            extensions: ["vue"]
        }),
        WindiCSS(),
        AutoImport({
            include: [/\.vue$/, /\.vue\?vue/],
            imports: ["vue", "vue-router"],
            resolvers: [initResolver]
        }),
        Components({
            include: [/\.vue$/, /\.vue\?vue/],
            extensions: ["vue"],
            dirs: ["src/components", "src/sections"],
            deep: false
        })
    ],
    ssgOptions: {
        script: "async",
        formatting: "prettify",
        includedRoutes(routes) {
            return routes.filter(route => !route.includes("index"));
        },
        onPageRendered(route, html) {
            console.log(`Processing ${route}...`);
            return html
                .replaceAll(/<!--[\s\S]*?-->/g, "")
                .replaceAll("/images", "${images_folder}")
                .replaceAll("/icons", "${icons_folder}")
                .replaceAll("img src", "img data-src");
        }
    },
    server: {
        fs: {
            allow: [".."]
        },
        host: true
    }
});

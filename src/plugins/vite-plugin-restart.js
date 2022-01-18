import fs from "fs";
import path from "path";
import micromatch from "micromatch";

const touch = path => {
    const time = new Date();

    try {
        fs.utimesSync(path, time, time);
    } catch (err) {
        fs.closeSync(fs.openSync(path, "w"));
    }
};

const toArray = arr => {
    if (!arr) return [];
    if (Array.isArray(arr)) return arr;
    return [arr];
};

export default function FullRestart(options = {}) {
    const configFile = "vite.config.js";
    const pathPlatform = process.platform === "win32" ? path.win32 : path.posix;

    const { glob: enableGlob = true } = options;

    let root = process.cwd();
    let reloadGlobs = [];
    let restartGlobs = [];

    return {
        name: "vite-plugin-restart",
        config(c) {
            if (!enableGlob) return;
            if (!c.server) c.server = {};
            if (!c.server.watch) c.server.watch = {};
            c.server.watch.disableGlobbing = false;
        },
        configResolved(config) {
            root = config.root;

            reloadGlobs = toArray(options.reload).map(i => pathPlatform.resolve(root, i));
            restartGlobs = toArray(options.restart).map(i => pathPlatform.resolve(root, i));
        },
        configureServer(server) {
            server.watcher.add([...restartGlobs, ...reloadGlobs]);
            server.watcher.on("add", file => {
                if (micromatch.isMatch(file, reloadGlobs)) {
                    touch(configFile);
                    server.ws.send({ type: "full-reload" });
                }
            });
            server.watcher.on("unlink", file => {
                if (micromatch.isMatch(file, restartGlobs)) {
                    touch(configFile);
                    server.ws.send({ type: "full-reload" });
                }
            });
        },
    };
}

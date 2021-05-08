import fs from "fs";

function touch(path) {
    const time = new Date();

    try {
        fs.utimesSync(path, time, time);
    } catch (err) {
        fs.closeSync(fs.openSync(path, "w"));
    }
}

export default function FullRestart(options = "") {
    let configFile = "vite.config.js";

    return {
        name: "vite-plugin-restart",
        configureServer(server) {
            server.watcher.on("add", (path) => {
                if (options != "") {
                    if (path.includes(options) && path.endsWith(".vue")) {
                        touch(configFile);
                        server.ws.send({ type: "full-reload" });
                    }
                }
            });
            server.watcher.on("unlink", (path) => {
                if (options != "") {
                    if (path.includes(options) && path.endsWith(".vue")) {
                        touch(configFile);
                        server.ws.send({ type: "full-reload" });
                    }
                }
            });
        },
    };
}

export default function HmrEvent() {
    return {
        name: "hmr-reload-event",
        handleHotUpdate({ server }) {
            server.ws.send({
                type: "custom",
                event: "module-update",
                data: {},
            });
        },
    }
}
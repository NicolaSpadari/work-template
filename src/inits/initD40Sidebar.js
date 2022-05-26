export default function initD40Sidebar() {
    if ($("#d40-sidebar")) {
        $(".d40-sidebar-toggler").on("click", () => {
            $("#d40-sidebar").toggleClass("visible");
        });
    }
}

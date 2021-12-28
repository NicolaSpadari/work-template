export default function initD40Sidebar() {
	if ($("#d40-sidebar")) {
		$(".d40-sidebar-toggler").on("click", function () {
			$("#d40-sidebar").toggleClass("tw:pointer-events-none");
			$("#d40-sidebar .sidebar-backdrop, #d40-sidebar .sidebar-icon").toggleClass("tw:opacity-0 tw:opacity-100");
			$("#d40-sidebar .sidebar-wrapper").toggleClass("tw:translate-x-full tw:translate-x-0");
		});
	}
}

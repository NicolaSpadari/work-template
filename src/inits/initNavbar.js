export default function initNavbar() {
    let prevScrollpos = $(window).scrollTop();

    $(window).on("scroll", () => {
        const currentScrollPos = $(window).scrollTop();

        if (currentScrollPos > 100) {
            $("#navbar").addClass("compressed");
        } else {
            $("#navbar").removeClass("compressed");
        }
        prevScrollpos = currentScrollPos;
    });
}

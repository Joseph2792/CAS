
$(window).on("load resize", function() {
    $('#navbarNav').removeClass("show")

    if (this.matchMedia("(min-width: 768px)").matches) {
    } else {
    //$dropdown.off("mouseenter mouseleave");
    }
});

$(document).ready(function() {
    $('#btn-toggle-menu').on("click", function() {
        $('#cont-menu').toggle();
        $('.navbar').toggleClass("mobile-menu");
    });
});
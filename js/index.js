$(document).ready(function() {
    $('#btn-toggle-menu').on("click", function() {
        $('#cont-menu').toggle();
        $('.navbar').toggleClass("mobile-menu");
    });

    $(window).on("load resize", function() {
        $('.navbar').removeClass("mobile-menu");    
    });

}); 

$(document).ready(function() {
    $('#btn-toggle-menu').on("click", function() {
        $('#cont-menu').toggle();
        $('.navbar').toggleClass("mobile-menu");
    });

    $(window).on("load resize", function() {
        $('.navbar').removeClass("mobile-menu");    
    });

    //var position = $(window).scrollTop(); 

    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        //var alturaDelViewport = window.innerHeight;

        if(scroll > 700){
            console.log("cambiar logo");
            $('#logo').attr("src","/assets/logo-color.svg")
        }else {
            $('#logo').attr("src","/assets/logo-blanco.svg")
        }

    });

});
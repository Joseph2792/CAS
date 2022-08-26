// $(document).ready(function() {
//     $('#btn-toggle-menu').on("click", function() {
//         $('#cont-menu').toggle();
//         $('.navbar').toggleClass("mobile-menu");
//     });

//     $(window).on("load resize", function() {
//         $('.navbar').removeClass("mobile-menu");    
//     });

// }); 

const getElement =  (selector, type = null) => {
    if(type == 'all'){
        return document.querySelectorAll(selector);
    }
    return document.querySelector(selector);
}

const mainTitle = getElement(".container-main");
console.log(mainTitle);

const home = document.getElementById('section-home');
const sustentabilidad = document.getElementById('section-sustentabilidad');


const opcion_menu = getElement()
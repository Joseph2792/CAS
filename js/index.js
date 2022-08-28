
//funcion generica para llamar a los elementos del dom
const getElement =  (selector, type = null) => {
    if(type == 'all'){
        return document.querySelectorAll(selector);
    }
    return document.querySelector(selector);
}

//llamo a la barras del toggle
const barsToggle = getElement('.fa-window-minimize','all');

//tansformo el boton toggle en close
const transformarCerrar = () => {
    for (let i = 0; i < barsToggle.length; i++) {
        if(i == 0) {
            barsToggle[i].style.transform = "rotateZ(45deg) translate(20px, 0px)";
        }
        if(i == 1){
            barsToggle[i].style.transform = "rotateZ(-45deg) translate(0px, -22px)";
        }
    }
}

//tansformo el boton close en toggle
const transformarToggle = () => {
    for (let i = 0; i < barsToggle.length; i++) {
        if(i == 0) {
            barsToggle[i].style.transform = "translate3d(0px, 0px, 10px)";
        }
        if(i == 1){
            barsToggle[i].style.transform = "translate3d(0px, -10px, 10px)";
        }
    }
}

//muestro y oculto el menu
const menuFlotante = (evt) => {
    const navbar = getElement('#cont-menu');
    const tieneClase = navbar.classList.contains('menu-flotante');
    
    if(tieneClase){
        navbar.classList.remove('menu-flotante');
        transformarToggle();        
    }else{
        navbar.classList.add("menu-flotante");
        transformarCerrar();
    }        
}

//obtengo el boton del menu
const buttonToggle = getElement('#btn-toggle-menu');
buttonToggle.addEventListener("click", menuFlotante);



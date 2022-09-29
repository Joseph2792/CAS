
//funcion generica para llamar a los elementos del dom
const getElement =  (selector, type = null) => {
    if(type == 'all'){
        return document.querySelectorAll(selector);
    }
    return document.querySelector(selector);
}

//llamo a la barras del toggle
const barsToggle = getElement('.fa-window-minimize','all');

const itemsMenu = getElement('.item-menu',"all");

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

const navbar = getElement('#cont-menu');
const menu = getElement('#cont-menu');
const logo = getElement('#cas-header');

//muestro y oculto el menu
const menuFlotante = () => {    
    const tieneClase = navbar.classList.contains('menu-flotante');
    
    if(tieneClase){
        navbar.classList.remove('menu-flotante'); 
        menu.classList.remove('navbar-white-flotante');
        logo.classList.remove('navbar-white-flotante');       
        transformarToggle();
    }else{
        navbar.classList.add("menu-flotante");  
        menu.classList.add('navbar-white-flotante');
        logo.classList.add('navbar-white-flotante');      
        transformarCerrar();        
    }        
}

//obtengo el boton del menu
const buttonToggle = getElement('#btn-toggle-menu');
buttonToggle.addEventListener("click", menuFlotante);


const cambiarLogoPorSeccion = (data) => {   
    const tieneMenuFlotante = navbar.classList.contains('menu-flotante');
    
    menu.classList.remove('navbar-white');
    menu.classList.remove('navbar-green');
    logo.classList.remove('navbar-white');
    logo.classList.remove('navbar-green');

    if(tieneMenuFlotante){
        navbar.classList.remove('menu-flotante');
        transformarToggle();
    }

    switch (data){
        case 'section-home':        
            menu.classList.add('navbar-white');
            logo.classList.add('navbar-white');
            console.log("home");
            break;
        case 'section-acerca':
            menu.classList.add('navbar-green');
            logo.classList.add('navbar-green');
            console.log("acerca");
            break;
        case 'section-productos':
            menu.classList.add('navbar-green');
            logo.classList.add('navbar-green');
            console.log("productos");
            break;
        case 'section-sustentabilidad':
            menu.classList.add('navbar-white');
            logo.classList.add('navbar-white');
            console.log("productos");
            break;
        case 'section-contacto':
            menu.classList.add('navbar-white');
            logo.classList.add('navbar-white');
            console.log("contacto");
            break;
    }    
}

const selectItemMenu = (evt) => {
    for(let item of itemsMenu){
        item.classList.remove("active");
    }    

    evt.currentTarget.classList.add("active");    
    
    const nameSeccion = evt.currentTarget.getAttribute("data-target");      

    cambiarLogoPorSeccion(nameSeccion);
    
}

for(const item of itemsMenu){
    item.addEventListener("click", selectItemMenu);
}

//---obtengo posicione de las secciones de la home

// const posicionHome = document.querySelector("#section-home").getBoundingClientRect().top;
// const posicionAcerca = document.querySelector("#section-acerca").getBoundingClientRect().top;
// const posicionProductos = document.querySelector("#section-productos").getBoundingClientRect().top;
// const posicionContacto = document.querySelector("#section-contacto").getBoundingClientRect().top;
document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    eventListeners();
});

function navegacionFija() {
 
    const barra = document.querySelector('.barra');
 
    //Registrar el interseccion observer
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) { //nos va a dar la informacion del elemento a observar, isIntersecting nos dice si esta visible o no el elemento
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
 
    //Elemento a observar
    observer.observe(document.querySelector('.fondo'));
}

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    } else{
        navegacion.classList.add('mostrar');
    }
}

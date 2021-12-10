document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
});

function navegacionFija() {
 
    const barra = document.querySelector('.nav-bg');
 
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
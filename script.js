let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills"); // Selecciona el elemento con id 'skills'
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top; // Calcula la distancia desde el top de la ventana

    // Si la distancia es mayor o igual a 30, se aplican las clases a las habilidades
    if (distancia_skills >= 30) {
        let habilidades = document.getElementsByClassName("progreso"); // Obtiene todos los elementos con la clase 'progreso'

        // Se añaden clases a cada habilidad
        habilidades[0].classList.add("python-sql");
        habilidades[1].classList.add("gis");
        habilidades[2].classList.add("remote-sensing");
        habilidades[3].classList.add("autocad");
        habilidades[4].classList.add("statistics");
        habilidades[5].classList.add("machine-learning");
        habilidades[6].classList.add("office");
        habilidades[7].classList.add("project-management");
        habilidades[8].classList.add("analytical-thinking");
        habilidades[9].classList.add("teamwork");
        habilidades[10].classList.add("communication");
        habilidades[11].classList.add("problem-solving");
        habilidades[12].classList.add("scientific-research");
        habilidades[13].classList.add("creativity");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
const imagenes = [
    "img/p1.jpeg",
    "img/p2.jpeg",
    "img/p3.jpeg",
    "img/p4.jpeg"
];

let contador = 0;
const imagenElemento = document.getElementById("carousel-image");

function cambiarImagen(direccion){
    contador += direccion;

    if(contador <0){
        contador = imagenes.length - 1;
    } else if (contador >= imagenes.length) {
           contador = 0;
    }

    imagenElemento.src = imagenes[contador];
}

cambiarImagen(0);
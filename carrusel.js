const imagenes = [
    "img/Img1.jpeg",
    "img/Img2.jpeg",
    "img/Img3.jpeg",
    "img/Img4.jpeg",
    "img/Img5.jpeg",
    "img/Img6.jpeg",
    "img/Img7.jpeg"
];

let contador = 0;
const imagenElemento = document.getElementById("carousel-image");

function cambiarImagen(direccion) {
    contador += direccion;


if(contador < 0) {
      contador = imagenes.length - 1;
} else if (contador >= imagenes.length){
    contador = 0;
}

imagenElemento.src = imagenes[contador];

}

cambiarImagen(0);
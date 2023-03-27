

const inputFile= document.getElementById('file')
const btnUpload= document.getElementById('upload')
const gif= document.getElementById("gif")
const toggleBtn= document.getElementById("toggleBtn")
let isPlaying= true



//
btnUpload.addEventListener('click', ()=>{
    inputFile.click();
})

inputFile.addEventListener('change', ()=>{
    //console.log(inputFile.file);
})

function changeToGifImage() {
    let gifImage= "bca-brew.gif"
    gif.src= gifImage
}

///////////////////////////////////////////////////////
//const gif = document.getElementById('gif');
//const toggleButton = document.getElementById('toggle-button');

// Agregar controlador de eventos para el botón de activar/desactivar
toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();
  // Si el GIF está detenido, reanudar la animación
  changeToGifImage()
  toggleBtn.disabled= true
  if (gif.classList.contains('stopped')) {
    gif.classList.remove('stopped');
  }
  // Si la animación está activa, detenerla
  else {
    gif.classList.add('stopped');
  }
});

// Cuando se recibe el archivo del servidor para descargar, detener la animación
// reemplazando el GIF con una imagen estática
function detenerAnimacion() {
  const staticImageUrl = "static.gif";
  gif.src = staticImageUrl;
}

/*
En este ejemplo de arriba, el GIF se anima utilizando la regla @keyframes y la propiedad animation en CSS. Cuando se hace clic en el botón "Activar/Desactivar", se agrega o se elimina la clase CSS "stopped" al GIF, lo que pausa o reanuda la animación.
Cuando se recibe un archivo del servidor para descargar, la función detenerAnimacion() detiene la animación del GIF reemplazando la imagen animada con una imagen estática.
Es importante tener en cuenta que esta técnica solo detiene la animación del GIF, pero no lo reinicia cuando se vuelve a mostrar la imagen animada. Para reiniciar la animación, debe eliminar la clase CSS "stopped" de la etiqueta <img>.
*/
/////////////////////////////////////////////////////////////
/*
gif.style.pointerEvents= "none"
gif.style.opacity= "0.5"
function toggleGif() {
    isPlaying= !isPlaying
    if(isPlaying){
        gif.style.pointerEvents= "auto"
        gif.style.opacity= "1"
    }else{
        gif.style.pointerEvents= "none"
        gif.style.opacity= "0.5"
    }
}
toggleBtn.addEventListener('click', toggleGif)
*/
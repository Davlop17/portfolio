
/* MENU */
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

/* CV download  */

function downloadPDF() {
    // URL del archivo PDF que deseas descargar
    var pdfUrl = "cv.pdf";
  
    // Nombre del archivo que se mostrará al descargar
    var pdfFileName = "cv_David.pdf";
  
    // Crea un enlace temporal para descargar el PDF
    var link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfFileName;
  
    // Dispara el clic en el enlace para iniciar la descarga
    link.click();
  }


  


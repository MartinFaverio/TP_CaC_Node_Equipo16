
function toggleText(seccion) {
    let secciones = document.getElementsByClassName('hide');
    for (let sec of secciones) {
        sec.classList.remove('show');
    }
    let hideText = document.getElementById(seccion);
    hideText.classList.toggle('show');
}








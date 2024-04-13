// Se declaran las VARIABLES y las CONSTANTES
var especialidad ="vacio";
const FONDO_ERROR = 'rgba(255, 0, 0, 0.1)';
const FONDO_OK = 'rgba(0, 206, 209, 1 )';
const FONDO_RESET = '#ffffff';

// Verifica si en el campo de ESPECIALIDAD se realizó alguna seleccion
function verificar_esp() {    
    especialidad = document.getElementById("esp").value;    
    if (especialidad == "vacio") {
        document.getElementById("esp").style.backgroundColor = FONDO_ERROR;
        window.alert("La especialidad seleccionada no es correcta!");        
    } else {
        document.getElementById("esp").style.backgroundColor = FONDO_OK;        
    }
}


// Acciones del boton ENVIAR
function verificar() {
    console.log("especialidad seleccionada: " +especialidad);
    if(especialidad == "vacio"){
        console.log("HAY ERRORES!!");
        window.alert("Los datos seleccionados contienen ERRORES!");
    } else{
        console.log("TODO OK!");
        document.getElementById("prueba1").textContent="OCUPADO";
        document.getElementById("prueba2").textContent="OCUPADO";
        document.getElementById("prueba3").textContent="OCUPADO";
        document.getElementById("prueba4").textContent="OCUPADO";
        document.getElementById("prueba5").textContent="OCUPADO";
        document.getElementById("prueba6").textContent="OCUPADO";
        document.getElementById("prueba7").textContent="LIBRE";
        document.getElementById("prueba8").textContent="LIBRE";
        document.getElementById("prueba9").textContent="LIBRE";
        document.getElementById("prueba10").textContent="LIBRE";
        document.getElementById("prueba11").textContent="LIBRE";
        document.getElementById("prueba12").textContent="LIBRE";
        document.getElementById("prueba13").textContent="LIBRE";
        document.getElementById("prueba14").textContent="LIBRE";
        document.getElementById("prueba15").textContent="LIBRE";
        document.getElementById("prueba16").textContent="LIBRE";
    }
}

// ACCIONES del boton BORRAR
function borrar(){
    console.log("SELECTORES RESETEADOS!");
    document.getElementById("esp").style.backgroundColor = FONDO_RESET;    
    document.getElementById("esp").value ="vacio";
    especialidad = "vacio";
    document.getElementById("prueba1").textContent="";
    document.getElementById("prueba2").textContent="";
    document.getElementById("prueba3").textContent="";
    document.getElementById("prueba4").textContent="";
    document.getElementById("prueba5").textContent="";
    document.getElementById("prueba6").textContent="";
    document.getElementById("prueba7").textContent="";
    document.getElementById("prueba8").textContent="";
    document.getElementById("prueba9").textContent="";
    document.getElementById("prueba10").textContent="";
    document.getElementById("prueba11").textContent="";
    document.getElementById("prueba12").textContent="";
    document.getElementById("prueba13").textContent="";
    document.getElementById("prueba14").textContent="";
    document.getElementById("prueba15").textContent="";
    document.getElementById("prueba16").textContent="";
}

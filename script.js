
 const mensajeencriptado = document.getElementById('ingreso-texto');
 const respuesta = document.getElementById('respuesta');

 document.querySelector('.advertencias').style.display ='none';


mensajeencriptado.addEventListener('keyup', (e) =>{
  e.preventDefault();
  var key = e.keyCode;
  if((key >=192 && key <= 255) || (key>=48 && key<=64) || (key>=91 && key<=96) || (key>=224 && key<=240) || (key>=242 && key <=255)){
    document.querySelector('.advertencias').style.display ='block';
  
  }
  if(mensajeencriptado.value.length == 0){
    document.querySelector('.advertencias').style.display ='none';
  }

  
}) ;

document.getElementById("encriptar").onclick = (e) =>{
   if(mensajeencriptado.value == ""){
    respuesta.value = "No hay nada para Encriptar";
  }
  else{
    e.preventDefault();
    respuesta.value = encriptarText(mensajeencriptado.value.toLowerCase());
    mensajeencriptado.value = "";
  }
}

document.getElementById('desencriptar').onclick = (e) =>{
  if(mensajeencriptado.value == ""){
    respuesta.value = "No hay nada para Desencriptar";
  }
  else{
    e.preventDefault();
    respuesta.value = desencriptarText(mensajeencriptado.value.toLowerCase());
    mensajeencriptado.value = "";
  }
  

}

document.getElementById('logo').onclick = (e) =>{
    e.preventDefault();
    mensajeencriptado.value = "";
    respuesta.value = "";
    console.log("se pudo");
 
}

document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    respuesta.value = encriptarText(mensajeencriptado.value.toLowerCase());
    mensajeencriptado.value = "";
  }
});

// función para encriptar texto
function encriptarText(mensajeencriptado){
   
    let mensaje = mensajeencriptado;
    //let matrixCode = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  for (let i = 0; i < matrixCode.length; i++) {
    if (mensaje.includes(matrixCode[i][0])) {
      mensaje = mensaje.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
   return mensaje;
}

// función para desencriptar texto
function desencriptarText(mensajeencriptado){
  let mensaje = mensajeencriptado.toLowerCase();
    console.log(mensaje);
    //let matrixCode = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  for (let i = 0; i < matrixCode.length; i++) {
    if (mensaje.includes(matrixCode[i][1])) {
      mensaje = mensaje.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
   return mensaje;
}

// función para copiar texto
function copiarTexto(){
  if(respuesta.value == ""){
    respuesta.value = "No hay nada para Copiar";
  }
  else{
    let copiar = respuesta.value;
    navigator.clipboard.writeText(copiar);
    respuesta.value="";
  }
 
 }


 
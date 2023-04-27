// Obtener elementos del DOM


// Función para encriptar el texto
function encriptar() {
  // Obtener el texto ingresado por el usuario

  const textoInput = document.getElementById('texto');

  const texto = textoInput.value;
  
  // Verificar que el texto ingresado solo contenga letras minúsculas
  if (/[A-Z]/.test(texto)) {
    swal("Ooops!", "el texto solo debe tener letras minusculas!", "warning");

    return;
  }
  
  // Encriptar el texto
  const textoEncriptado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    

    if (document.getElementById("texto").value.length != 0) {
      
      document.getElementById("texto").value = textoEncriptado;
      document.getElementById("titulo-mensaje").textContent =
        "Texto encriptado con éxito";
      
    } else {
     
      swal("Ooops!", "Debes ingresar un texto!", "warning");
    }
  // Mostrar el texto encriptado

}

// Función para desencriptar el texto
function desencriptar() {

  let texto = document.getElementById("texto").value;

  // Obtener el texto encriptado ingresado por el usuario
  
  
  // Desencriptar el texto
  const textoDesencriptado = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    
  // Mostrar el texto desencriptado
  document.getElementById("texto").value = textoDesencriptado;
  document.getElementById("titulo-mensaje").textContent =
  "Texto desencriptado con éxito";
}

// Función para copiar el texto en el portapapeles
function copiarTexto() {
  // Seleccionar el input por su ID
  const input = document.getElementById("texto");

  // Seleccionar el contenido del input
  input.select();
  input.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copiar el contenido al portapapeles
  document.execCommand("copy");

  // Alerta de confirmación
  swal("Copiado", "Copiado con exito!", "success");
}



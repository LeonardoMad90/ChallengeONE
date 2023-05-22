                                             // Función de encriptar texto


function encriptarTexto() {
    // Obtener el texto ingresado por el usuario
    var textoOriginal = document.querySelector('#ingresarTexto textarea').value;
    if (/[A-Z]/.test(textoOriginal)) {
        alert('El mensaje solo puede contener letras minúsculas.');
        return;
    }
    var caracteresEspecialesRegex = /[!\"#$%&\/()=]/;
    if (caracteresEspecialesRegex.test(textoOriginal)) {
        alert('El mensaje no cumple los requisitos de encriptación.');
        return;
    }
    // Aplicar la lógica de encriptación
    var textoEncriptado = encriptar(textoOriginal);

    // Mostrar el resultado en la sección correspondiente
    var showResult = document.getElementById('showResult');
    showResult.textContent = textoEncriptado;

    // Mostrar la sección de resultado oculta
    var resultadoOculto = document.getElementById('resultadoOculto');
    resultadoOculto.classList.remove('oculto');

    // Ocultar la imagen y el texto de "¡Hey, mándame un mensaje!"
    var vector = document.getElementById('vector');
    var msnTexto = document.getElementById('msnTexto');
    vector.style.display = 'none';
    msnTexto.style.display = 'none';
}

// Función de encriptación
function encriptar(texto) {
// Aplicar la lógica de encriptación según las reglas especificadas
    var textoEncriptado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')
    .replace(/E/g, 'ENTER')
    .replace(/I/g, 'IMES')
    .replace(/A/g, 'AI')
    .replace(/O/g, 'OBER')
    .replace(/U/g, 'UFAT');

    return textoEncriptado;
}

// Asociar la función de encriptar al botón correspondiente
var btnEncriptar = document.getElementById('btn-e');
btnEncriptar.addEventListener('click', encriptarTexto);


                                             // Función de desencriptar texto



function desencriptarTexto() {
    // Obtener el texto ingresado por el usuario
    var textoEncriptado = document.querySelector('#ingresarTexto textarea').value;

    // Verificar si hay texto para desencriptar
    if (textoEncriptado !== '') {
      // Aplicar la lógica de desencriptación
    var textoDesencriptado = desencriptar(textoEncriptado);

      // Mostrar el resultado en la sección correspondiente
    var showResult = document.getElementById('showResult');
    showResult.textContent = textoDesencriptado;

      // Mostrar la sección de resultado oculta
    var resultadoOculto = document.getElementById('resultadoOculto');
    resultadoOculto.classList.remove('oculto');

      // Ocultar la imagen y el texto de "¡Hey, mándame un mensaje!"
    var vector = document.getElementById('vector');
    var msnTexto = document.getElementById('msnTexto');
    vector.style.display = 'none';
    msnTexto.style.display = 'none';
    }
}

// Función de desencriptación
function desencriptar(textoEncriptado) {
// Aplicar la lógica de desencriptación invirtiendo la clave
    var textoDesencriptado = textoEncriptado
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
    .replace(/ENTER/g, 'E')
    .replace(/IMES/g, 'I')
    .replace(/AI/g, 'A')
    .replace(/OBER/g, 'O')
    .replace(/UFAT/g, 'U');

    return textoDesencriptado;
}

// Asociar la función de desencriptar al botón correspondiente
var btnDesencriptar = document.getElementById('btn-d');
btnDesencriptar.addEventListener('click', desencriptarTexto);



// Función para copiar el texto en el portapapeles



function copiarTexto() {
    // Obtener el elemento que contiene el texto encriptado o desencriptado
    var resultado = document.getElementById('showResult');
    var texto = resultado.textContent;
  
    // Utilizar el API del portapapeles para copiar el texto
    navigator.clipboard.writeText(texto)
      .then(function() {
        // Mostrar una notificación o mensaje de éxito
        mostrarMensajeCopiado();
      })
      .catch(function(error) {
        console.error('Error al copiar texto: ', error);
      });
  }
  
  // Asociar la función de copiarTexto al botón correspondiente
  var btnCopiar = document.getElementById('btn-c');
  btnCopiar.addEventListener('click', copiarTexto);
  
  // Función para mostrar una notificación o mensaje de éxito
  function mostrarMensajeCopiado() {
    // Obtener el elemento de la notificación
    var toast = document.querySelector('.toast');
  
    // Mostrar la notificación
    toast.classList.add('show');
  
    // Ocultar la notificación después de un tiempo determinado (opcional)
    setTimeout(function() {
      toast.classList.remove('show');
    }, 2000); // Ocultar después de 2 segundos (2000 milisegundos)
  }
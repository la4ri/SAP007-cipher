import cipher from './cipher.js';


const areaTexto = document.getElementById("mensagem");
const botaoCodificar = document.getElementById("codificar");
const botaoDescodificar = document.getElementById("descodificar");
const resultadoCifraEncode = document.getElementById("resultadoCodificar");
const offset = document.getElementById("offset-encode");


function codificarClick() {

    resultadoCifraEncode.innerText = cipher.encode(parseInt(offset.value), areaTexto.value);
}

function descodificarClick() {
    resultadoCifraEncode.innerText = cipher.decode(parseInt(offset.value), areaTexto.value);
}

botaoCodificar.addEventListener("click", codificarClick);
botaoDescodificar.addEventListener("click", descodificarClick);





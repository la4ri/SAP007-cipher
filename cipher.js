const CODIGO_A = 65;
const CODIGO_Z = 90;
const UNIVERSO = CODIGO_Z - CODIGO_A + 1;


const cipher = {
  encode(offset, mensagem) {

    if (typeof offset !== "number") {
      throw new TypeError("offset não é um número");
    }

    if (typeof mensagem !== "string") {
      throw new TypeError("mensagem não é uma string");
    }

    let quantidadeLetras = mensagem.length;
    let resultadoCifra = "";

    for (let i = 0; i < quantidadeLetras; i++) {
      let codigoASC = mensagem.charCodeAt(i);
      if (codigoASC >= CODIGO_A && codigoASC <= CODIGO_Z) {
        codigoASC = (codigoASC - CODIGO_A + offset) % UNIVERSO + CODIGO_A;
      }

      resultadoCifra = resultadoCifra.concat(String.fromCharCode(codigoASC))
    }
    return resultadoCifra

  },

  decode(offset, mensagem) {

    if (typeof offset !== "number") {
      throw new TypeError("offset não é um número");
    }

    if (typeof mensagem !== "string") {
      throw new TypeError("mensagem não é uma string");
    }

    let quantidadeLetras = mensagem.length;
    let resultadoCifra = "";

    for (let i = 0; i < quantidadeLetras; i++) {
      let codigoASC = mensagem.charCodeAt(i);
      if (codigoASC >= CODIGO_A && codigoASC <= CODIGO_Z) {
        codigoASC = (codigoASC - CODIGO_Z - offset) % UNIVERSO + CODIGO_Z;
      }
      resultadoCifra = resultadoCifra.concat(String.fromCharCode(codigoASC))
    }
    return resultadoCifra


  }
};

export default cipher;

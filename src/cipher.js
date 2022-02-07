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
      let codigoA = 65;
      let cifrar = (codigoASC - codigoA + offset) % 26 + codigoA;
      resultadoCifra = resultadoCifra.concat(String.fromCharCode(cifrar))
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
      let codigoZ = 90;
      let cifrar = (codigoASC - codigoZ - offset) % 26 + codigoZ;
      resultadoCifra = resultadoCifra.concat(String.fromCharCode(cifrar))
    }
    return resultadoCifra


  }
};

export default cipher;



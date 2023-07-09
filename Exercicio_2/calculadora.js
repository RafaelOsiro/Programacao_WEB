/* 
PRÓ-REITORIA ACADÊMICA
ESCOLA DE EDUCAÇÃO, TECNOLOGIA E COMUNICAÇÃO
CURSO DE CIÊNCIA DA COMPUTAÇÃO
PROGRAMAÇÃO PARA WEB - GPE02M0381
AUTOR:
RAFAEL RIKI OGAWA OSIRO - UC21100716
ORIENTADOR: JOÃO PEDRO MACLEURE NUNES DOS SANTOS
BRASÍLIA - DF
2023
*/

// EXERCÍCIO 1
console.log("===========EXERCÍCIO 1===========");
module.exports = {
  somar: function(n1, n2) {
      return n1 + n2;
  },

  subtrair: function(n1, n2) {
      return n1 - n2;
  },

  multiplicar: function(n1, n2) {
      return n1 * n2;
  },

  dividir: function(n1, n2) {
      if (n2 != 0) {
          return n1 / n2;
      } else {
          return "Não é possível dividir por 0!";
      }
  },

  fatorial: function(n1) {
    if (n1 > 0) {
        return n1 * module.exports.fatorial(n1 - 1);
    } else {
        return 1;
    }
  }
}
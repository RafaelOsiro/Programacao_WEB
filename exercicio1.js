const calculadora = {
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
    }
}

console.log("O resultado da soma é: " + calculadora.somar(1, 1));
console.log("O resultado da subtração é: " + calculadora.subtrair(1, 1));
console.log("O resultado da multiplicação: " + calculadora.multiplicar(1, 1));
console.log("O resultado da divisão: " + calculadora.dividir(1, 1));
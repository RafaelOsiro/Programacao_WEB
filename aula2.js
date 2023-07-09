let indefinido; // undefined

const nulo = null;

const meuArray = [1, "dois", 3];
console.log(meuArray); // (3) [1, 'dois', 3]

meuArray[0] = "um";
console.log(meuArray); // (3) ['um', 'dois', 3]

/* const meuArray = [
    1,
    "dois",
    3
]; */

const meuObjetoPessoa = {
  nome: "João",
  profissao: "Professor",
  telefones: [6199887766, 6199778822]
}

console.log(meuObjetoPessoa);
// {nome: João, profissão: 'Professor', telefones: Array(2)}

console.log(meuObjetoPessoa.nome);
console.log(meuObjetoPessoa["nome"]);
console.log(meuObjetoPessoa.telefones[1]);

const hora = 12;
let cumprimento = "";

if(hora < 12) {
  cumprimento = "Bom dia!";
} else if(hora < 18) {
  cumprimento = "Boa tarde";
} else {
  cumprimento = "Boa noite";
}

console.log(cumprimento);

const diaDataSemana = 4;
let nomeDiaSemana = "";
switch (diaDataSemana) {
  case 0:
    nomeDiaSemana = "Domingo";
    break;
  case 1:
    nomeDiaSemana = "Segunda";
    break;
  case 2:
    nomeDiaSemana = "Terça";
    break;
  case 3:
    nomeDiaSemana = "Quarta";
    break;
  case 4:
    nomeDiaSemana = "Quinta";
    break;
  case 5:
    nomeDiaSemana = "Sexta";
    break;
  case 6:
    nomeDiaSemana = "Sábado";
    break;
  default:
    nomeDiaSemana = "Dia da semana não encontrado";
    break;
}

const nomesDiasDaSemana = [
  "Domingo", "Segunda",
  "Terça", "Quarta",
  "Quinta", "Sexta",
  "Sábado"
];

for(let i = 0; i < 7; i++) {
  nomeDiaSemana = nomesDiasDaSemana[i];
  console.log(nomeDiaSemana);
}

for (const key in nomesDiasDaSemana) {
  const elemento = nomesDiasDaSemana[key];
  console.log(`${key} - ${elemento}`);
  // 0 - Domingo ... 6 - Sábado
}

const carro = {
  modelo: "Opala",
  ano: 1986,
  cor: "Preto"
}

for (const key in carro) {
  const elemento = carro[key];
  console.log(`${key} - ${elemento}`);
}

let i = 0;
while(i < 7) {
  console.log(nomesDiasDaSemana[i]);
  i++; // se esquecer, executa pra sempre
}

// tem um problema aqui
do {
  console.log(nomesDiasDaSemana[i]);
  i++;
} while (i < 7);
console.log("Trabalhando com Condicionais!");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 16;
const estaAcompanhado = true;
const passagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa Viagem!");

    listaDeDestinos.splice(1, 1); // removendo item
}

else {
    console.log("Não é possível Vender!");
}

console.log("Embarque: \n\n");
if (idadeComprador > 18 && passagemComprada) {
    console.log("Boa Viagem!");
}

else {
    console.log("Você não pode Embarcar.");
}

console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

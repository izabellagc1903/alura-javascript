console.log("Trabalhando com Listas");

// jeito trabalhoso
// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

// add um item ao array
listaDeDestinos.push('Cianorte');

// array começa em 0 (apaga são paulo)
listaDeDestinos.splice(1, 1)


console.log("Destinos Possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.Log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

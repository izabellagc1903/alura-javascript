console.log("\nTrabalhando com Fluxos!");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 16;
const estaAcompanhado = true;
let passagemComprada = false;
const destino = "Cianorte";

console.log("\nDestinos Possíveis: ");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhado == true);

let contador = 0;
let destinoExiste = false;

while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }

    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!");
}

else{
    console.log("Erro..");
}

for (let i=0; i<3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}
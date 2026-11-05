const morcego = require("../entidades/morcego");
const ratos = require("../entidades/ratos");
const zumbi = require("../entidades/zumbi");
const combate = require("./combate");

function encontro() {

    let chanceEncontro = Math.random();
    if (chanceEncontro <= 0.4) {

        console.log("");
        console.log("Algo vindo da escuridão avança contra você!")

        let selecionaInimigo = Math.random();

        if (selecionaInimigo <= 0.3) {

            console.log("");
            console.log("É um dos pesquisadores. Ele não responde a nenhum dos seus comandos, está fora de si!");
            return zumbi;

        } else if (selecionaInimigo > 0.3 && selecionaInimigo < 0.5) {

            console.log("");
            console.log("Um morcego te dá um rasante!");
            return morcego;
        }
   
    }
}

// console.log(encontro())

module.exports = encontro;
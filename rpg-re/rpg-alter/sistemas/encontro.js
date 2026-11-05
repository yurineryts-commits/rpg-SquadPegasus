const morcego = require("../entidades/morcego");
const ratos = require("../entidades/ratos");
const zumbi = require("../entidades/zumbi");
const combate = require("./combate");

function encontro() {

    let chanceEncontro = Math.random;
    if (chanceEncontro <= 0.4) {

        console.log("");
        console.log("Algo vindo da escuridão avança contra você!")

        let selecionaInimigo = Math.random;

        if (selecionaInimigo <= 0.3) {

            const inimigo = zumbi;
            console.log("");
            console.log("É um dos pesquisadores. Ele não responde a nenhum dos seus comandos, está fora de si!");


        } else if (selecionaInimigo > 0.3 && selecionaInimigo < 0.5) {

            const inimigo = morcego;
            console.log("");
            console.log("Um morcego te dá um rasante!");
            

        } else if (selecionaInimigo >= 0.5) {

            const inimigo = ratos;
            console.log("É um rato. O animal saiu dos escombros e pulou em você!");

        }

        return combate(inimigo);

    } else {

        console.log("");
        console.log("Você continua em alerta constante.")

    }

}

module.exports = encontro;
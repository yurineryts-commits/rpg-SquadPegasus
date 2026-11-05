const encontro = require("../sistemas/encontro");
const acessoLaboratorios = require("./acesso-laboratorios");
const hallEntrada = require("./hall-entrada");
const salaMaquinas = require("./sala-maquinas");

const prompt = require("prompt-sync")();
let salaExplorada = false;

function alaFuncionarios(player) {

    console.log("");
    console.log("Você se dirige à Ala dos Funcionários. Seria reconfortante encontrar alguém são aqui, mas o local está tão devastado quanto qualquer outro do centro de pesquisa.");

    encontro;

    console.log(`
                  
                   1- Hall de Entrada
                   2- Sala de Máquinas
                   3- Acesso aos Laboratórios
                   p- Procurar
                   i- Inventário

                  `);

    let escolha = prompt("> ");

    if (escolha === 1) {

        return hallEntrada;

    } else if (escolha === 2) {

        return salaMaquinas;

    } else if (escolha === 3) {

        return acessoLaboratorios;

    } else if (escolha === p) {

        //return procurar

    } else if (escolha === i) {

        console.log("");
        console.log(inventario);

    }

    console.log("");
    console.log("Valor inválido, digite uma opcao do menu.");
    return "Ala dos Funcionários";

}

module.exports = alaFuncionarios;
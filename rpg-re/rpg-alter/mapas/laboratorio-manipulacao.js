const encontro = require("../sistemas/encontro");
const acessoLaboratorios = require("./acesso-laboratorios");

const prompt = require("prompt-sync")();
let salaExplorada = false;

function laboratorioManipulacao(player) {

    console.log("");
    console.log("O Laboratório de Manipulação. O cheiro forte dos reagentes te causa náusea, esta é de longe a área em pior estado do centro de pesquisa.");
    console.log("Quem sabe o que mais foi desenvolvido aqui.");

    encontro;

    console.log(`
                  
                   1- Acesso aos Laboratórios
                   p- Procurar
                   i- Inventário

                  `);

    let escolha = prompt("> ");

    if (escolha === 1) {

        return acessoLaboratorios;

    } else if (escolha === p) {

        //return procurar;

    } else if (escolha === i) {

        console.log("");
        console.log(inventario);

    }

    console.log("");
    console.log("Valor inválido, digite uma opcao do menu.");
    return "Laboratório de Manipulação";

}

module.exports = laboratorioManipulacao;
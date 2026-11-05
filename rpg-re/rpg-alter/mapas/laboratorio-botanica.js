const encontro = require("../sistemas/encontro");
const acessoLaboratorios = require("./acesso-laboratorios");

const prompt = require("prompt-sync")();
let salaExplorada = false;

function laboratorioBotanica(player) {

    console.log("");
    console.log("Você entra no Laboratório de Botânica. Em meio ao caos você encontra diversas mudas de plantas desconhecidas, boa parte destruídas.");
    
    if (salaExplorada == false){

    console.log("Talvez haja algo útil aqui.");

    }
    
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
    return "Laboratório de Botânica";

}

module.exports = laboratorioBotanica;
const encontro = require("../sistemas/encontro");
const acessoLaboratorios = require("./acesso-laboratorios");

const prompt = require("prompt-sync")();
let salaExplorada = false;

function laboratorioAnimal(player) {

    console.log("");
    console.log("Você entra no Laboratório de Testes Animais. Você vê diversos aparelhos que não reconhece, papéis espalhados por todos os cantos da sala e gaiolas destruídas, os ratos devem ter vindo daqui.");
    console.log("Alguns dos aparelhos parecem operantes com o gerador de emergência funcionando.");

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

        // return procurar;

    } else if (escolha === i) {

        console.log("");
        console.log(inventario);

    }

    console.log("");
    console.log("Valor inválido, digite uma opcao do menu.");
    return "Laboratório de Testes Animais";

}

module.exports = laboratorioAnimal;
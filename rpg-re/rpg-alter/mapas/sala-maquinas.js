const encontro = require("../sistemas/encontro");
const acessoLaboratorios = require("./acesso-laboratorios");
const alaFuncionarios = require("./ala-funcionarios");
const hallEntrada = require("./hall-entrada");

const prompt = require("prompt-sync")();
let salaExplorada = false;

function salaMaquinas(player) {

    console.log("");
    console.log("Você segue as indicações do laboratório e chega à sala de máquinas. Talvez haja um gerador de emergência para reestabelecer a energia do local.");

    if (salaExplorada == false){
        
        console.log("");
        console.log("É necessário um cartão-chave para acessar a sala de máquinas");

    }

    if (player.inventario.includes("Cartão-chave") && salaExplorada == false) {

        console.log("");
        console.log("Você usa o cartão-chave para destrancar a Sala de Máquinas.");

        salaExplorada = true;

    }

    if (geradorLigado == false) {

        console.log("");
        console.log("Como esperado, você encontra o gerador de emergência.")
        console.log("Você liga o velho gerador de emergência. A máquina faz bastante barulho, mas logo a energia retorna ao centro de pesquisa.")

        geradorLigado = true;
        

    } else {

        console.log("");
        console.log("O gerador barulhento continua funcionando.")

    }

    if (salaExplorada == true && geradorLigado == true){

          encontro;
          
    }

    console.log(`
                  
                   1- Hall de Entrada
                   2- Acesso aos Laboratórios
                   3- Ala dos Funcionários
                   p- Procurar
                   i- Inventário

                  `);

    let escolha = prompt("> ");

    if (escolha === 1) {

        return hallEntrada;

    } else if (escolha === 2) {

        return acessoLaboratorios;

    } else if (escolha === 3) {

        return alaFuncionarios;

    } else if (escolha === p) {

        // return procurar;

    } else if (escolha === i) {

        console.log("");
        console.log(inventario);

    }

    console.log("");
    console.log("Valor inválido, digite uma opcao do menu.");
    return "Sala de Máquinas";

}

module.exports = salaMaquinas;
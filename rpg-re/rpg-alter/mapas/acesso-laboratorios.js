const encontro = require("../sistemas/encontro");
const alaFuncionarios = require("./ala-funcionarios");
const hallEntrada = require("./hall-entrada");
const laboratorioAnimal = require("./laboratorio-animal");
const laboratorioBotanica = require("./laboratorio-botanica");
const laboratorioManipulacao = require("./laboratorio-manipulacao");
const salaMaquinas = require("./sala-maquinas");

const prompt = require("prompt-sync")();
let salaExplorada = false;

function acessoLaboratorios(player) {

    console.log("");
    console.log("Você vai até a área de acesso aos laboratórios. O que quer que tenha acontecido aqui provavelmente começou por trás destas portas.");

    if (geradorLigado == false) {

        console.log("Sem energia as portas não abrem não importa o quanto você tente forçá-las.");

    }

    encontro;

    if (geradorLigado == false){

    console.log(`
                  
                   1- Hall de Entrada
                   2- Sala de Máquinas
                   3- Ala dos Funcionários
                   p- Procurar
                   i- Inventário

                  `);

    let escolha = prompt("> ");

    if (escolha === 1) {

        return hallEntrada;

    } else if (escolha === 2) {

        return salaMaquinas;

    } else if (escolha === 3) {

        return alaFuncionarios;

    } else if (escolha === p) {

        console.log("");
        console.log("Usar lanterna?");
        console.log(`
                  
                   s- Sim
                   n- Não

                  `);

        let escolha = prompt("> ");

        if (escolha === s) {

            lanterna.usar();
            //lanterna.usar() muda o valor de "ligada" da lanterna para true e consome bateria, o valor "ligada" volta para falso depois da busca;
            player.procurar();
            //player.procurar() é uma função do player que dá uma descrição sobre o local e checa se a lanterna está ou não ligada. 
            //Se estiver ligada a chance de encontrar um item consumível aumenta.
            //Procurar com a lanterna desligada pode ser benéfico em algumas áreas, por exemplo, pode ajudar a encontrar um rato, pois a luz os assustaria.
            //Talvez os locais devessem ter uma variável "vasculhado", que começa como falsa e é alterada para verdadeiro depois da primeira busca
            //Dessa forma poderíamos dar itens importantes para a progressão de forma garantida.

        } else if (escolha === n) {

            player.procurar();

        }

    } else if (escolha === i) {

        console.log("");
        console.log(inventario);

    }

    console.log("");
    console.log("Valor inválido, digite uma opcao do menu.");
    return "Acesso aos Laboratórios";

} else {

        console.log(`
                  
                   1- Hall de Entrada
                   2- Sala de Máquinas
                   3- Ala dos Funcionários
                   4- Laboratório de Testes Animais
                   5- Laboratório de Botânica
                   6- Laboratório de Manipulação
                   p- Procurar
                   i- Inventário

                  `);

    let escolha = prompt("> ");

    if (escolha === 1) {

        return hallEntrada;

    } else if (escolha === 2) {

        return salaMaquinas;

    } else if (escolha === 3) {

        return alaFuncionarios;

    } else if (escolha === 4){

        return laboratorioAnimal;

    } else if (escolha === 5){

        return laboratorioBotanica;

    } else if (escolha === 6) {

        return laboratorioManipulacao;

    }else if (escolha === p) {

        //return procurar;

    } else if (escolha === i) {

        console.log("");
        console.log(inventario);

    }

    console.log("");
    console.log("Valor inválido, digite uma opcao do menu.");
    return "Acesso aos Laboratórios";

}

}

module.exports = acessoLaboratorios;
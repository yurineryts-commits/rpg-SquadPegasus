const encontro = require("../sistemas/encontro");
const acessoLaboratorios = require("./acesso-laboratorios");
const alaFuncionarios = require("./ala-funcionarios");
const salaMaquinas = require("./sala-maquinas");

const prompt = require("prompt-sync")();
let salaExplorada = false;

function hallEntrada(player) {

    console.log("");
    console.log("Você se encontra na entrada do Centro de Pesquisa Farmaceutica Lázaro. Na recepção, apenas o silêncio perturbador e o ambiente tomado pela escuridão.");
    console.log("Entre equipamentos destruídos e sinais de contaminação, algo parecia estar à espreita nas sombras.")

    encontro;

    console.log(`
                  
                   1- Sala de Máquinas
                   2- Acesso aos Laboratórios
                   3- Ala dos Funcionários
                   p- Procurar
                   i- Inventário

                  `);

    let escolha = prompt("> ");

    if (escolha === 1) {

        return salaMaquinas;

    } else if (escolha === 2) {

        return acessoLaboratorios;

    } else if (escolha === 3) {

        return alaFuncionarios;

    } else if (escolha === p) {

        // return procurar

    } else if (escolha === i) {

        console.log("");
        console.log(inventario);

    }

    console.log("");
    console.log("Valor inválido, digite uma opcao do menu.");
    return "Hall de Entrada";

}

module.exports = hallEntrada;
const acessoLaboratorios = require("./mapas/acesso-laboratorios");
const alaFuncionarios = require("./mapas/ala-funcionarios");
const hallEntrada = require("./mapas/hall-entrada");
const laboratorioAnimal = require("./mapas/laboratorio-animal");
const laboratorioBotanica = require("./mapas/laboratorio-botanica");
const laboratorioManipulacao = require("./mapas/laboratorio-manipulacao");
const salaMaquinas = require("./mapas/sala-maquinas");
const zumbi = require("./entidades/zumbi");
const ratos = require("./entidades/ratos");
const morcego = require("./entidades/morcego");
const Player = require("./entidades/player");

const prompt = require("prompt-sync")();

let jogando = true;
let geradorLigado = false;
let local = "Hall de Entrada"

console.log("");
console.log("Nas primeiras horas da manhã foi emitido um chamado de emergência vindo do Centro de Pesquisa Farmaceutica Lázaro.");
console.log("Não ficou claro pela ligação o que havia ocorrido no local, mas você, como o policial mais próximo da ocorrência foi enviado para atender ao chamado.");

while (jogando) {

    if (player.morto == true) {

        console.log("Sua visão escurece e você cai no chão. Você sente suas últimas energias se esvaindo...");
        jogando = false;
        break;

    }

    if (player.infeccao === "Terminal") {

        //return infeccao;
        break;

    }

    if (local === "Hall de Entrada") {

        //Procurar aqui te dá chances de encontrar:
        //- O cartão-chave, caso você use a lanterna, senão pode ser adiquirido aleatoriamente depois de derrotar um infectado
        //- Sanduíches, os pesquisadores tinham que almoçar também. Serve para recuperar vida, menos que o Kit Médico e não cura sangramento. Pode ser usado para distrair os ratos.

        local = hallEntrada(player);

    }

    if (local === "Sala de Máquinas") {

        //Procurar aqui te dá chances de encontrar:
        //- Alguma forma de recarregar a lanterna, uso único até encontrar outro item, pode ser um carregador em mal estado, que termina de quebrar depois do uso.
        //- Poderia ter um machado aqui, como aqueles de emergência em caso de incêndio

        local = salaMaquinas(player);

    }

    if (local === "Acesso aos Laboratórios") {

        //Procurar aqui com a lanterna pode dar chance de encontrar algum documento do centro de pesquisa que dá contexto sobre a situação, talvez algo com o nome do pesquisador chefe.


        local = acessoLaboratorios(player);

    }

    if (local === "Ala dos Funcionários") {

        //Procurar aqui te dá chances de encontrar: 
        //- Kits Médicos para recuperar vida e curar sangramentos
        //- Sanduíches, os pesquisadores tinham que almoçar também. Serve para recuperar vida, menos que o Kit Médico e não cura sangramento. Pode ser usado para distrair os ratos.
        //- Alguma forma de recarregar a lanterna, uso único até encontrar outro item, pode ser um carregador em mal estado, que termina de quebrar depois do uso.
        //- O item mais raro poderiam ser mais balas para a arma.

        local = alaFuncionarios(player);

    }

    if (local === "Laboratório de Testes Animais") {

        //Procurar aqui te dá chances de encontrar: 
        //- Kits Médicos para recuperar vida e curar sangramentos
        //- Usando a lanterna você encontra a pesquisa que explica sobre o soro produzido com a medula dos ratos

        local = laboratorioAnimal(player);

    }

    if (local === "Laboratório de Botânica") {

        //- Usando a lanterna você encontra o tubo de ensaio para usar no laboratório animal

        local = laboratorioBotanica(player);

    }

    if (local === "Laboratório de Manipulação") {

        //Procurar aqui te dá chances de encontrar: 
        //- Kits Médicos para recuperar vida e curar sangramentos
        //- Talvez balas para a arma
        //- Procurar aqui pode ser como você encontra o boss, e ai seria garantido, independente da lanterna. 
        // ou então ele pode ser o único encontro de inimigo assim que você entra na sala

        local = laboratorioManipulacao(player);

    }
}

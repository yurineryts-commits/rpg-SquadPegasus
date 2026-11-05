const sanduiche = {

    nome: "Sanduíche",
    descricao: "Sanduíche surpreendentemente bem preservado. Era o almoço de alguém.",
    qtd: 1,

}

function usar(entidade) {

    if (entidade = player) {

        player.vida = (player.vida + 5);
        console.log("");
        console.log("Você come o sanduíche. Estava bom! Vida +5");

    } if (entidade = rato) {

        console.log("");
        console.log("O rato hesita um pouco mas começa a comer o sanduíche.")
        //rato.comendo = true;

    }

}
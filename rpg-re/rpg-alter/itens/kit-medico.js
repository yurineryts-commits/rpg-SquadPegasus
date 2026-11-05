const kitMedico = {

    nome: "Kit Médico",
    descricao: "Um kit de primeiros-socorros. Restaura a vida por completo e estanca sangramentos.",
    qtd: 1,

}

function usar (player){

    player.vida = player.vidaMax;
    console.log("");
    console.log("Você trata suas feridas com o kit de primeiros-socorros. Você se sente bem melhor!");

    if (player.sangrando == true) {
        player.sangrando = false;
        console.log("Você estancou o sangramento.");
    }

}
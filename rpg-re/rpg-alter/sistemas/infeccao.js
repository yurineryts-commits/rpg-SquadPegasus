if (player.infeccao !== "Negativa") {

    if (player.infeccao === "Branda") {

        player.vidaMax - 2;
        player.dano - 1;

    } else if (player.infeccao === "Avançada") {

        player.velocidade - 2;

    } else if (player.infeccao === "Terminal") {

        console.log("Sua condição piora outra vez. Suas últimas sensações são sua garganta seca, visão turva, e o suor frio da doença escorrer por suas costas.");
        console.log("Você perambula sem rumo pelos corredores do laboratório. É tarde demais...");
        jogando = false;

    }
}
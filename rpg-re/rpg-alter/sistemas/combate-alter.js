
let combateAtivo = true;
let entidades = [];

function iniciarCombate(player, inimigo) {

    //A entidade mais rápida entra no Array primeiro

    if (player.velocidade >= inimigo.velocidade) {

        entidades.push(player);
        entidades.push(inimigo);

    } else {

        entidades.push(inimigo);
        entidades.push(player);

    }

    while (combateAtivo === true) {

        // Loop de turnos

        // Encerra o combate se a vida do player ou do inimigo zerar

        if (player.vida <= 0) {

            console.log("");
            console.log("Você morreu.")
            combateAtivo = false;

        } else if (inimigo.vida <= 0) {

            console.log("");
            console.log("Você matou o " + inimigo.nome + "!");
            combateAtivo = false;

        }

        // Loop de acoes

        for (i = 0; i < entidades.length; i++) {

            if (entidades[i] == player) {

                //acao do player
                console.log(`
                  
                   1- Atirar
                   2- Itens
                   3- Fugir

                  `);

                let escolha = prompt("> ");

                if (escolha === 1) {

                    player.ataque;

                } else if (escolha === 2) {

                    player.usarItem;

                } else if (escolha === 3) {

                    player.fugir;

                }

                console.log("");
                console.log("Valor inválido, digite uma opcao do menu.");
                //return "Laboratório de Botânica";

            }

            else {

                //acao do inimigo

                inimigo.ataque;
            }

        }
    }
}
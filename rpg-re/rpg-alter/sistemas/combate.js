
const boss_final = require("../entidades/boss-final");
const morcego = require("../entidades/morcego");
const player = require("../entidades/player");
const ratos = require("../entidades/ratos");
const zumbi = require("../entidades/zumbi");
const encontro = require("./encontro");
const prompt = require("prompt-sync")();



function combate(inimigo) {


  let turno = Math.random()



  if (turno > 0.5) {

    //  console.log(turno)
    console.log("Você encontra um", inimigo.nome, " o que o que voce faz:")
    console.log(

      `1-ATIRAR
       2-FUGIR
       3-CONSUMIVEL
       `

    )

    let escolha = prompt("> ");

    player.precisaoTiro = Math.random();
    inimigo.Velocidade = Math.random();


    if (escolha === "2") {


      console.log("Voce escapa");
      return this.local



    }


    if (player.precisaoTiro > inimigo.Velocidade && inimigo.vida > 0 && escolha === "1") {

      console.log("Atirou e...",);
      console.log("O tiro acertou");
      inimigo.vida = inimigo.vida - player.dano;

      if (inimigo.vida > 0) {
        console.log("O", inimigo.nome, "ainda esta vivo");
      }
      else {
        console.log("O", inimigo.nome, "foi morto");
        return;
      }

      //  return combate(inimigo);
    }



    else if (escolha === 3) { //CONSUMIVEL



      player.inventário.select(ITEM).usar()



    }


    else if (player.precisaoTiro < inimigo.Velocidade && inimigo.vida > 0) {


      console.log("Atirou e...",);
      console.log("Voce errou");
      return combate(inimigo)

    }

  }



  else if (turno < 0.5) {

    console.log(turno)
    inimigo.Velocidade = Math.random();
    player.velocidade = Math.random();



    if (player.vida <= 0) {


      console.log("O policial morreu")

    }


    else if (inimigo.velocidade < player.velocidade) {
      console.log("O", inimigo.nome, "errou o ataque")
      combate(inimigo)

    }

    else if (inimigo.velocidade > player.velocidade && player.vida > 0) {


      console.log("O", inimigo.nome, "acertou o ataque")
      player.vida = player.vida - inimigo.dano
      combate(inimigo)

    }


  }


}

//PARA TESTES

// console.log(encontro())
combate(zumbi)

// combate(boss_final)
// combate(ratos)
// combate(morcego)


module.exports = combate;

// const prompt=require("prompt-sync")();


let jogando=true;
let local="Hall de entrada"



const Player={

   vida:10,
   dano:1,
   balas:5,
   precisaoTiro:0,
   inventario:[],
   acao:0,


}

const Zumbi={


   vida:5,
   dano:2,
   velocidade:0,


}










while(jogando=true){


      




      //MOVIMENTAÇÃO

      if (Player.vida<=0) {

      console.log("O policial caiu após ser atacado por um zumbi");
      jogando=false;

      }

      if (local==="Hall de entrada"){



      console.log("O policial está na" , local);
      console.log("O policial entrou no laboratório abandonado, onde o silêncio era perturbador e o ambiente estava tomado pela escuridão. Entre equipamentos destruídos e sinais de contaminação, algo parecia estar à espreita nas sombras.")


      }











// COMBATE

// function combate(inimigo) {


// Player.acao=Number(prompt("O que voce faz"))   

// if (Player.balas>0 && Player.acao===1){

//       Player.acao=0
//       console.log("Atirou e...", );
//       Player.balas=Player.balas-1;
//       Player.precisaoTiro= Math.random();
//       inimigo.velocidade= Math.random();



//          if (Player.precisaoTiro>inimigo.velocidade){

//          // console.log(Player.precisaoTiro , inimigo.velocidade);
//          console.log("O tiro acertou");
//          Player.balas= Player.balas -1;
//          console.log("Balas restantes; ", Player.balas );
//          inimigo.vida=inimigo.vida - Player.dano;
//          console.log("O zumbi ainda tem; ", inimigo.vida );

//          }

//          else{

//            // console.log(Player.precisaoTiro , inimigo.velocidade);
//            console.log("Voce errou");

//       }

//    }

// }



// combate(Zumbi)





}
const prompt=require("prompt-sync")();


let jogando=true;
let local="Hall de entrada"








const Player={

   vida:10,
   dano:1,
   balas:5,
   precisaoTiro:0,
   inventario:[],
   acao:0,
   estado: "andando",
   escolha:"",

}

const Zumbi={


   vida:5,
   dano:2,
   velocidade:0,


}




while(jogando===true){


   if (Player.escolha==="0") {

   jogando=false;

   }


  
  if (jogando===false) {

   break;
  } 

 //MOVIMENTAÇÃO
   

   function escolha(){
      
      Player.escolha= prompt("O que você faz?");  
      
   }
   

 function inventario(){
   if (Player.escolha=== "i"|| Player.escolha==="I") {


      if (Player.inventario.length===0) {
      
      console.log("O inventário esta vazio")

      }


      else{

       console.log( "Equipamentos e objetos encontrados:" , Player.inventario);  
     

       }

   }

}

   // if (local!= "Hall de entrada" && Player.escolha===1) {


   //    local="Hall de entrada"

   // }


   if (Player.vida<=0) {}


    else if  (local==="Hall de entrada"){



      console.log("O policial está no(a)" , local);
      console.log("O policial entrou no laboratório abandonado, onde o silêncio era perturbador e o ambiente estava tomado pela escuridão. Entre equipamentos destruídos e sinais de contaminação, algo parecia estar à espreita nas sombras.")

      console.log(`
                  
                   1- Balcão
                   2- Porta laboratorios
                   3- Ala de funcionario
                   P- Procurar
                   I- inventario


                  `)

    // Player.escolha= prompt("O que você faz?");
      escolha();
      inventario();  

   if (Player.escolha==="1"){
   local= "Balcão";
   }
  

   }
   

   
   else if  (local==="Balcão"){  
      

   console.log("O policial está no(a)" , local);
   console.log("O balcão está coberto de documentos espalhados, gavetas abertas e uma cadeira caída.Entre os papéis amassados, um cartão parcialmente encoberto pelo pó chama a atenção.")

   console.log(`
                  
                   1- Hall de entrada
                   P- Procurar
                   I- inventario


                `)

      escolha();  
      inventario();




   if (local==="Balcão" && Player.escolha==="p" && !Player.inventario.includes("CARTÃO DE ACESSO")){  
      

   console.log("O policial está no(a)" , local);
   console.log("O Ao afastar alguns documentos, o policial encontra uma credencial esquecida. CARTÃO DE ACESSO — FUNCIONÁRIOS.")
   Player.inventario.push("CARTÃO DE ACESSO")
   console.log("O policial pega o", Player.inventario[0]);
   

   console.log(`
                  
                   1- Hall de entrada
                   I- inventario



                `)

   

      escolha();
      inventario();
   }

     
   else if(Player.escolha==="1") {


   local="Hall de entrada"  

   }


   } 

   else if((Player.escolha==="p" || Player.escolha==="i") && Player.inventario.includes("CARTÃO DE ACESSO")) {


   console.log("O policial está no(a)" , local);
   console.log(`
                  
                   1- Hall de entrada
                   I- inventario



                `)

   

      escolha();
     
   }

   }

 




















// COMBATE





 if (Player.vida<=0 && Player.estado==="combate"){
   
   console.log("O policial caiu após ser atacado por um zumbi");
   
      // jogando=false;

      }





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






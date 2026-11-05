const criarZumbi = require("../entidades/zumbi");
const criarRatos = require("../entidades/ratos");
const criarMorcego = require("../entidades/morcego");
const combater = require("./combate");
function encontro(player) {
  // A chance única de encontro aleatório por entrada em uma área é de 35%.
  // A exceção do Laboratório de Manipulação é tratada em mover(), pois lá só há o boss.
  if (Math.random() >= 0.35) {
    console.log("Você permanece em alerta. Nenhuma criatura apareceu.");
    return null;
  }
  const sorteio = Math.random();
  const inimigo = sorteio < 0.45 ? criarZumbi() : sorteio < 0.75 ? criarRatos() : criarMorcego();
  return combater(player, inimigo);
}
module.exports = encontro;

// A infecção só é adquirida por exposição ao ataque de um Zumbi.
// Depois de contaminado, o quadro avança a cada cinco mudanças de área.
const NIVEIS = ["Negativa", "Branda", "Avançada", "Terminal"];
function aplicarEfeitos(player) {
  // Recalcula os atributos a partir dos valores-base para evitar penalidades acumuladas.
  const base = player.atributosBase || { vidaMax: 20, dano: 5, velocidade: 6 };
  player.vidaMax = base.vidaMax;
  player.dano = base.dano;
  player.velocidade = base.velocidade;
  if (player.infeccao === "Branda") {
    player.vidaMax = 18; player.dano = 4;
  } else if (player.infeccao === "Avançada") {
    player.vidaMax = 15; player.dano = 3; player.velocidade = 4;
  } else if (player.infeccao === "Terminal") {
    player.vida = 0; player.morto = true;
    console.log("A infecção atingiu estágio terminal. Você não consegue continuar.");
  }
  player.vida = Math.min(player.vida, player.vidaMax);
}
function iniciarInfeccao(player) {
  if (player.infeccao !== "Negativa") return;
  player.infeccao = "Branda";
  player.movimentosParaInfeccao = 0;
  console.log("O ataque do Zumbi contaminou você! A infecção está no estágio Branda.");
  aplicarEfeitos(player);
}
function registrarMudancaArea(player) {
  if (player.infeccao === "Negativa" || player.infeccao === "Terminal") return;
  player.movimentosParaInfeccao = (player.movimentosParaInfeccao || 0) + 1;
  if (player.movimentosParaInfeccao >= 5) {
    player.movimentosParaInfeccao = 0;
    const indice = NIVEIS.indexOf(player.infeccao);
    if (indice >= 0 && indice < NIVEIS.length - 1) {
      player.infeccao = NIVEIS[indice + 1];
      console.log(`A infecção progrediu para ${player.infeccao} após cinco mudanças de área!`);
      aplicarEfeitos(player);
    }
  }
}
module.exports = { aplicarEfeitos, iniciarInfeccao, registrarMudancaArea };

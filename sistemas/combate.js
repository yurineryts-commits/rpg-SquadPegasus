const prompt = require("../prompt");
const { iniciarInfeccao } = require("./infeccao");

// Probabilidades de sangramento por ataque bem-sucedido do inimigo.
const CHANCE_SANGRAMENTO = {
  "Zumbi": 0.15,
  "Ratos": 0.05,
  "Morcego": 0.20,
  "Cientista Infectado": 0.25
};
function combater(player, inimigo) {
  console.log(`\n⚠ Você encontrou ${inimigo.nome}!`);
  while (player.vida > 0 && inimigo.vida > 0) {
    // Sangramento causa exatamente 1 ponto de dano no início de cada turno do jogador.
    if (player.sangrando) {
      player.vida = Math.max(0, player.vida - 1);
      console.log("O sangramento causou 1 ponto de dano.");
      if (player.vida <= 0) break;
    }
    console.log(`\nSua vida: ${player.vida}/${player.vidaMax} | Munição: ${player.municao}${player.sangrando ? " | SANGRANDO" : ""}`);
    console.log(`${inimigo.nome}: ${inimigo.vida}/${inimigo.vidaMax}`);
    console.log("1 - Atirar  2 - Fugir  3 - Usar item");
    const escolha = prompt("> ").trim();
    if (escolha === "1") {
      if (player.municao <= 0) console.log("Sem munição! Você precisa fugir ou usar um item.");
      else {
        player.municao--;
        if (Math.random() <= player.precisao) {
          inimigo.vida = Math.max(0, inimigo.vida - player.dano);
          console.log(`Tiro certeiro! ${inimigo.nome} recebeu ${player.dano} de dano.`);
        } else console.log("Você errou o disparo!");
      }
    } else if (escolha === "2") {
      if (Math.random() < 0.65) { console.log("Você conseguiu fugir."); return "fugiu"; }
      console.log("A fuga falhou!");
    } else if (escolha === "3") {
      const opcoes = player.inventario.filter(n => n === "Kit Médico" || n === "Sanduíche");
      if (!opcoes.length) { console.log("Você não possui consumíveis."); continue; }
      opcoes.forEach((n,i) => console.log(`${i+1} - ${n}`));
      const n = Number(prompt("Escolha o item (0 cancela): "));
      if (n === 0) continue;
      const item = opcoes[n-1];
      if (!item) { console.log("Opção inválida."); continue; }
      require(item === "Kit Médico" ? "../itens/kit-medico" : "../itens/sanduiche").usar(player);
      player.inventario.splice(player.inventario.indexOf(item),1);
    } else { console.log("Opção inválida."); continue; }

    if (inimigo.vida > 0) {
      const dano = inimigo.dano;
      player.vida = Math.max(0, player.vida - dano);
      console.log(`${inimigo.nome} atacou e causou ${dano} de dano.`);
      // Apenas Zumbis podem transmitir a infecção; os demais inimigos não contaminam.
      if (inimigo.nome === "Zumbi" && player.vida > 0 && player.infeccao === "Negativa" && Math.random() < 0.18) iniciarInfeccao(player);
      // Sangramento é independente da infecção e pode ser causado por todos os inimigos.
      const chance = CHANCE_SANGRAMENTO[inimigo.nome] || 0;
      if (player.vida > 0 && !player.sangrando && Math.random() < chance) {
        player.sangrando = true;
        console.log("O ataque causou SANGRAMENTO! Você perderá 1 de vida por turno até estancar.");
      }
    }
  }
  if (player.vida <= 0) { player.morto = true; console.log("Você foi derrotado."); return "derrota"; }
  console.log(`Você derrotou ${inimigo.nome}!`);
  return "venceu";
}
module.exports = combater;

module.exports = {
  nome: "Sanduíche",
  descricao: "Recupera até 5 pontos de vida.",
  usar(player) {
    const antes = player.vida;
    player.vida = Math.min(player.vidaMax, player.vida + 5);
    console.log(`Você comeu o sanduíche e recuperou ${player.vida - antes} de vida.`);
  }
};

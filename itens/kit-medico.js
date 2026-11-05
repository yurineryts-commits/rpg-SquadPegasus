module.exports = {
  nome: "Kit Médico",
  descricao: "Restaura toda a vida e estanca sangramentos.",
  usar(player) {
    player.vida = player.vidaMax;
    player.sangrando = false;
    console.log("Você usou o Kit Médico. Vida restaurada e sangramento estancado.");
  }
};

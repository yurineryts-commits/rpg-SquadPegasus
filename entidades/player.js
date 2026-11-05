function criarPlayer() {
  return {
    nome: "Policial",
    atributosBase: { vidaMax: 20, dano: 5, velocidade: 6 },
    movimentosParaInfeccao: 0,
    vida: 20,
    vidaMax: 20,
    dano: 5,
    precisao: 0.8,
    velocidade: 6,
    municao: 12,
    infeccao: "Negativa",
    sangrando: false,
    inventario: [],
    morto: false
  };
}
module.exports = criarPlayer;

// O índice do item identifica cada unidade encontrada, inclusive itens repetidos no mesmo mapa.
const descobertos = new Set();
function procurar(player, local, itens) {
  const indice = itens.findIndex((item, i) => !descobertos.has(`${local}:${i}`));
  console.log("\nVocê vasculha o ambiente...");
  if (indice < 0) {
    console.log("Não há mais nada útil para encontrar aqui.");
    return null;
  }
  const item = itens[indice];
  descobertos.add(`${local}:${indice}`);
  player.inventario.push(item.nome);
  console.log(`Você encontrou: ${item.nome}. ${item.descricao || ""}`);
  return item.nome;
}
function mostrarInventario(player) {
  console.log("\n===== INVENTÁRIO =====");
  if (!player.inventario.length) console.log("Vazio.");
  else {
    const contagem = {};
    player.inventario.forEach(nome => contagem[nome] = (contagem[nome] || 0) + 1);
    Object.entries(contagem).forEach(([nome,qtd]) => console.log(`- ${nome}${qtd > 1 ? ` x${qtd}` : ""}`));
  }
  console.log(`Munição: ${player.municao} | Vida: ${player.vida}/${player.vidaMax}`);
}
module.exports = { procurar, mostrarInventario };

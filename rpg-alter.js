const prompt = require("./prompt");
const criarPlayer = require("./entidades/player");
const criarBoss = require("./entidades/boss-final");
const { procurar, mostrarInventario } = require("./sistemas/procurar");
const encontro = require("./sistemas/encontro");
const combater = require("./sistemas/combate");
const { registrarMudancaArea } = require("./sistemas/infeccao");

const player = criarPlayer();
const estado = {
  local: "Hall de Entrada",
  geradorLigado: false,
  chefeDerrotado: false,
  salaChefeVisitada: false,
  pesquisadorDerrotado: false,
  jogoAtivo: true
};

const mapas = {
  "Hall de Entrada": {
    descricao: "Você está na entrada do Centro de Pesquisa Farmacêutica Lázaro. A recepção está destruída e sinais de contaminação cobrem as paredes.",
    destinos: ["Sala de Máquinas", "Ala dos Funcionários", "Acesso aos Laboratórios"],
    itens: [
      { nome: "Cartão-chave", descricao: "Abre a Sala de Máquinas." },
      { nome: "Sanduíche", descricao: "Recupera até 5 pontos de vida." },
      { nome: "Sanduíche", descricao: "Uma unidade extra de alimento; recupera até 5 pontos de vida." }
    ]
  },
  // Sala de Máquinas agora também possui encontros aleatórios e itens de alimento.
  "Sala de Máquinas": {
    descricao: "O gerador de emergência está desligado. Um cartão-chave pode liberar o painel de acesso.",
    destinos: ["Hall de Entrada", "Ala dos Funcionários", "Acesso aos Laboratórios"],
    itens: [{ nome: "Munição", descricao: "Você encontra 6 projéteis." }, { nome: "Sanduíche", descricao: "Recupera até 5 pontos de vida." }, { nome: "Sanduíche", descricao: "Uma unidade extra de alimento; recupera até 5 pontos de vida." }]
  },
  // A Ala dos Funcionários também participa dos encontros aleatórios.
  "Ala dos Funcionários": {
    descricao: "Armários revirados, mesas tombadas e pertences abandonados contam a história de uma evacuação desesperada.",
    destinos: ["Hall de Entrada", "Sala de Máquinas", "Acesso aos Laboratórios"],
    itens: [
      { nome: "Kit Médico", descricao: "Restaura toda a vida e estanca sangramento." },
      { nome: "Sanduíche", descricao: "Recupera até 5 pontos de vida." },
      { nome: "Sanduíche", descricao: "Uma unidade extra de alimento; recupera até 5 pontos de vida." }
    ]
  },
  "Acesso aos Laboratórios": {
    descricao: "As portas blindadas levam aos setores de pesquisa. O sistema eletrônico depende do gerador.",
    destinos: ["Hall de Entrada", "Sala de Máquinas", "Ala dos Funcionários", "Laboratório de Testes Animais", "Laboratório de Botânica", "Laboratório de Manipulação"],
    itens: [{ nome: "Relatório de Pesquisa", descricao: "O relatório menciona um soro experimental feito a partir de material biológico." }, { nome: "Sanduíche", descricao: "Recupera até 5 pontos de vida." }, { nome: "Sanduíche", descricao: "Uma unidade extra de alimento; recupera até 5 pontos de vida." }]
  },
  // O laboratório de Testes Animais mantém um Kit Médico e recebe Sanduíches extras.
  "Laboratório de Testes Animais": {
    descricao: "Gaiolas destruídas e equipamentos quebrados. Os ratos usados nos testes parecem ter sido os primeiros infectados.",
    destinos: ["Acesso aos Laboratórios"],
    itens: [{ nome: "Amostra de Medula", descricao: "Componente biológico necessário para preparar o soro." }, { nome: "Kit Médico", descricao: "Restaura toda a vida." }, { nome: "Sanduíche", descricao: "Recupera até 5 pontos de vida." }, { nome: "Sanduíche", descricao: "Uma unidade extra de alimento; recupera até 5 pontos de vida." }]
  },
  // O laboratório de Botânica contém um Kit Médico e duas unidades de Sanduíche.
  "Laboratório de Botânica": {
    descricao: "Mudas desconhecidas crescem entre vidros quebrados. Uma planta parece resistir à contaminação.",
    destinos: ["Acesso aos Laboratórios"],
    itens: [{ nome: "Extrato Vegetal", descricao: "Componente estabilizador do soro experimental." }, { nome: "Sanduíche", descricao: "Recupera até 5 pontos de vida." }, { nome: "Sanduíche", descricao: "Uma unidade extra de alimento; recupera até 5 pontos de vida." }, { nome: "Kit Médico", descricao: "Restaura toda a vida e estanca sangramentos." }]
  },
  "Laboratório de Manipulação": {
    descricao: "O laboratório está tomado por reagentes derramados. No centro da sala, o cientista responsável aguarda, transformado.",
    destinos: ["Acesso aos Laboratórios"],
    itens: [{ nome: "Kit Médico", descricao: "Restaura toda a vida e estanca sangramentos." }, { nome: "Sanduíche", descricao: "Recupera até 5 pontos de vida." }, { nome: "Sanduíche", descricao: "Uma unidade extra de alimento; recupera até 5 pontos de vida." }]
  }
};

function descricaoLocal() {
  if (estado.local === "Sala de Máquinas") {
    return estado.geradorLigado
      ? "O gerador de emergência está ligado. As portas eletrônicas dos laboratórios recebem energia."
      : "O gerador de emergência está desligado. Um cartão-chave pode liberar o painel de acesso.";
  }
  return mapas[estado.local].descricao;
}

function tem(nome) { return player.inventario.includes(nome); }
function adicionar(nome) { player.inventario.push(nome); }
function consumir(nome) {
  const i = player.inventario.indexOf(nome);
  if (i >= 0) player.inventario.splice(i, 1);
}
function ligarGerador() {
  if (estado.geradorLigado) {
    console.log("O gerador já está ligado. As portas dos laboratórios estão energizadas.");
    return;
  }
  if (!tem("Cartão-chave")) {
    console.log("Você precisa do Cartão-chave para liberar o painel do gerador.");
    return;
  }
  console.log("Você aproxima o Cartão-chave do painel e libera os controles do gerador.");
  const confirmar = prompt("Ligar o gerador de emergência? (1 - Sim / 0 - Não) ").trim();
  if (confirmar === "1") {
    estado.geradorLigado = true;
    console.log("O gerador entra em funcionamento. As portas eletrônicas dos laboratórios recebem energia.");
  } else {
    console.log("Você deixou o gerador desligado. Pode ativá-lo depois usando o Cartão-chave nesta sala.");
  }
}
function usarItem() {
  const opcoes = player.inventario.filter(n => ["Kit Médico", "Sanduíche"].includes(n));
  const podeUsarCartao = estado.local === "Sala de Máquinas" && !estado.geradorLigado && tem("Cartão-chave");
  if (podeUsarCartao) opcoes.push("Cartão-chave (ativar painel do gerador)");
  if (!opcoes.length) {
    console.log(estado.local === "Sala de Máquinas" && estado.geradorLigado
      ? "O gerador já está ligado. Você não possui itens de uso disponíveis."
      : "Você não possui itens de uso disponíveis.");
    return;
  }
  opcoes.forEach((nome, i) => console.log(`${i + 1} - ${nome}`));
  const n = Number(prompt("Qual item deseja usar? (0 cancela) "));
  if (n === 0) return;
  const selecionado = opcoes[n - 1];
  if (!selecionado) { console.log("Opção inválida."); return; }
  if (selecionado.startsWith("Cartão-chave")) {
    ligarGerador();
    return; // O cartão é um item-chave e não deve ser consumido.
  }
  require(selecionado === "Kit Médico" ? "./itens/kit-medico" : "./itens/sanduiche").usar(player);
  consumir(selecionado);
}
function procurarLocal() {
  const nomeLocal = estado.local;
  const lista = mapas[nomeLocal].itens;
  const achado = procurar(player, nomeLocal, lista);
  if (achado === "Munição") {
    player.municao += 6;
    consumir("Munição");
    console.log("Munição adicionada ao carregador (+6).");
  }
  if (achado === "Relatório de Pesquisa") estado.pesquisadorDerrotado = true;
  if (tem("Amostra de Medula") && tem("Extrato Vegetal") && !tem("Soro Experimental")) {
    adicionar("Soro Experimental");
    console.log("\nAs duas amostras reagem entre si. Você preparou o Soro Experimental!");
  }
}
function mover(destino) {
  if (!mapas[destino]) return;
  if (destino === "Sala de Máquinas" && !tem("Cartão-chave")) {
    console.log("A porta está trancada. Você precisa encontrar o Cartão-chave.");
    return;
  }
  if (destino === "Sala de Máquinas" && !estado.geradorLigado) {
    ligarGerador();
  }
  if (destino.startsWith("Laboratório") && !estado.geradorLigado) {
    console.log("As portas eletrônicas estão sem energia. Ligue o gerador na Sala de Máquinas.");
    return;
  }
  if (destino === "Laboratório de Manipulação" && !tem("Soro Experimental")) {
    console.log("Você sente uma presença hostil, mas recua: precisa descobrir como produzir o soro antes de enfrentar o cientista.");
    return;
  }
  estado.local = destino;
  // Cada deslocamento para outra área conta para a progressão da infecção.
  registrarMudancaArea(player);
  if (player.vida <= 0 || player.morto) { estado.jogoAtivo = false; return; }
  console.log(`\n>>> ${destino} <<<`);
  console.log(descricaoLocal());
  // Cada área tem 35% de chance de encontro aleatório ao entrar.
  // O Laboratório de Manipulação é a exceção: nele só ocorre o encontro com o boss.
  if (destino !== "Laboratório de Manipulação") {
    encontro(player);
    if (player.vida <= 0) estado.jogoAtivo = false;
  }
  if (destino === "Laboratório de Manipulação" && !estado.chefeDerrotado) {
    console.log("\nO Cientista Infectado surge entre os equipamentos!");
    const resultado = combater(player, criarBoss());
    if (resultado === "venceu") {
      estado.chefeDerrotado = true;
      consumir("Soro Experimental");
      console.log("\nVocê injeta o soro no equipamento de contenção e interrompe a proliferação do agente infeccioso.");
      console.log("O Centro Lázaro está finalmente em silêncio. Você conseguiu sobreviver!");
      estado.jogoAtivo = false;
    } else estado.jogoAtivo = false;
  }
}
function menu() {
  while (estado.jogoAtivo && player.vida > 0) {
    const mapa = mapas[estado.local];
    console.log(`\n========== ${estado.local.toUpperCase()} ==========`);
    console.log(descricaoLocal());
    console.log(`\nVida: ${player.vida}/${player.vidaMax} | Munição: ${player.municao} | Infecção: ${player.infeccao}${player.sangrando ? " | SANGRANDO" : ""}`);
    console.log("\n1 - Viajar  2 - Procurar  3 - Inventário  4 - Usar item  5 - Status  0 - Sair");
    const escolha = prompt("> ").trim();
    if (escolha === "1") {
      const destinos = mapa.destinos;
      destinos.forEach((d,i) => console.log(`${i+1} - ${d}`));
      const n = Number(prompt("Destino (0 cancela): "));
      if (n === 0) continue;
      const destino = destinos[n-1];
      if (!destino) { console.log("Destino inválido."); continue; }
      mover(destino);
    } else if (escolha === "2") {
      procurarLocal();
    } else if (escolha === "3") {
      mostrarInventario(player);
    } else if (escolha === "4") {
      usarItem();
    } else if (escolha === "5") {
      console.log(`\nPersonagem: ${player.nome}\nVida: ${player.vida}/${player.vidaMax}\nDano: ${player.dano}\nPrecisão: ${Math.round(player.precisao*100)}%\nMunição: ${player.municao}\nInfecção: ${player.infeccao}\nSangramento: ${player.sangrando ? "Sim" : "Não"}\nMudanças de área para progressão: ${player.movimentosParaInfeccao || 0}/5\nGerador: ${estado.geradorLigado ? "Ligado" : "Desligado"}`);
    } else if (escolha === "0") {
      estado.jogoAtivo = false;
      console.log("Você encerrou a missão.");
    } else console.log("Opção inválida. Tente novamente.");
  }
}
function iniciar() {
  console.log("==============================================");
  console.log("             RPG ALTER - O SURTO");
  console.log("==============================================");
  console.log("\nNas primeiras horas da manhã, um chamado de emergência veio do Centro de Pesquisa Farmacêutica Lázaro.");
  console.log("Você é o policial enviado para investigar. Descubra o que aconteceu, sobreviva e encontre uma forma de deter a infecção.");
  console.log("\nObjetivo: encontrar o Cartão-chave, ligar o gerador, obter os componentes do soro e derrotar o Cientista Infectado.");
  menu();
  if (player.vida <= 0 || player.morto) console.log("\nFIM DE JOGO — sua missão terminou.");
  else if (!estado.chefeDerrotado) console.log("\nMissão encerrada. Você poderá iniciar uma nova partida para tentar novamente.");
}
if (require.main === module) iniciar();
module.exports = { iniciar, mapas };

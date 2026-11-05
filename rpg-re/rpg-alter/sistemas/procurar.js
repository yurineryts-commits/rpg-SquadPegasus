
// false = acha os itens na ordem da lista | true = acha em ordem aleatória
const ORDEM_ALEATORIA = false;

// Quais itens já foram achados em cada local (para não repetir).
const jaEncontrados = {};

// Descrições dos itens já achados (usadas na tela de inventário).
const descricoes = {};

//  Inventário

function garantirInventario(player) {

    if (!Array.isArray(player.inventario)) {
        player.inventario = [];
    }

}

function adicionarAoInventario(player, nome, descricao) {

    garantirInventario(player);
    player.inventario.push(nome);

    if (descricao) {
        descricoes[nome] = descricao;
    }

}

function mostrarInventario(player) {

    garantirInventario(player);

    console.log("");
    console.log("===== INVENTÁRIO =====");

    if (player.inventario.length === 0) {

        console.log("Você não está carregando nada.");

    } else {

        // Agrupa repetidos: ["Kit Médico", "Kit Médico"] -> Kit Médico x2
        const quantidades = {};
        for (const nome of player.inventario) {
            quantidades[nome] = (quantidades[nome] || 0) + 1;
        }

        for (const nome in quantidades) {
            const qtd = quantidades[nome] > 1 ? ` x${quantidades[nome]}` : "";
            const desc = descricoes[nome] ? `: ${descricoes[nome]}` : "";
            console.log(`- ${nome}${qtd}${desc}`);
        }

    }

    console.log("======================");

}


//  Procurar

// Procura UM item no local, dentre os itens que o mapa passou.
// Retorna o nome do item achado, ou null se não achou nada.
function procurar(player, local, itens) {

    // Aceita "Nome" ou { nome, descricao }
    const lista = (itens || []).map(i => typeof i === "string" ? { nome: i } : i);

    if (!jaEncontrados[local]) {
        jaEncontrados[local] = [];
    }

    const restantes = lista.filter(i => !jaEncontrados[local].includes(i.nome));

    console.log("");
    console.log("Você vasculha o local com cuidado...");

    if (restantes.length === 0) {

        console.log(lista.length === 0
            ? "Não há nada de útil por aqui."
            : "Você já revirou tudo por aqui. Não há mais nada de útil.");
        return null;

    }

    const item = ORDEM_ALEATORIA
        ? restantes[Math.floor(Math.random() * restantes.length)]
        : restantes[0];

    jaEncontrados[local].push(item.nome);
    adicionarAoInventario(player, item.nome, item.descricao);

    console.log("");
    console.log(`Você encontrou: ${item.nome}!`);
    if (item.descricao) console.log(item.descricao);

    return item.nome;

}

module.exports = {
    procurar,
    mostrarInventario,
    adicionarAoInventario,
};
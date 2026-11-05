const fs = require("fs");

// Leitura síncrona de uma linha: mantém o jogo simples e sem dependências externas.
function prompt(mensagem = "") {
  if (mensagem) process.stdout.write(mensagem);
  const bytes = [];
  let chegouAoFim = false;
  const buffer = Buffer.alloc(1);
  try {
    while (true) {
      const quantidade = fs.readSync(0, buffer, 0, 1, null);
      if (quantidade === 0) { chegouAoFim = true; break; }
      if (buffer[0] === 10) break;
      if (buffer[0] !== 13) bytes.push(buffer[0]);
    }
  } catch (erro) {
    if (erro.code !== "EAGAIN") throw erro;
  }
  if (chegouAoFim && bytes.length === 0) return "\\u0004";
  return Buffer.from(bytes).toString("utf8");
}
module.exports = prompt;

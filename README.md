# RPG Alter — O Surto

RPG textual de sobrevivência desenvolvido em Node.js. O jogador assume o papel de um policial enviado ao Centro de Pesquisa Farmacêutica Lázaro após um chamado de emergência. O local está contaminado e criaturas hostis circulam pelos setores.

## Requisitos

- Node.js 16 ou superior
- npm

## Instalação

1. Extraia/clône o projeto.
2. Abra o terminal na pasta `rpg-alter`.
3. Instale as dependências:

```bash
npm install
```

## Como executar

```bash
npm start
```

Também é possível iniciar diretamente:

```bash
node rpg-alter.js
```

## Objetivo da missão

Para concluir a campanha:

1. Explore o **Hall de Entrada** e encontre o Cartão-chave.
2. Vá à **Sala de Máquinas** e ligue o gerador de emergência.
3. Com a energia restabelecida, acesse os laboratórios.
4. Procure a **Amostra de Medula** no Laboratório de Testes Animais.
5. Procure o **Extrato Vegetal** no Laboratório de Botânica.
6. Ao obter os dois componentes, o **Soro Experimental** é preparado automaticamente.
7. Entre no **Laboratório de Manipulação** e derrote o Cientista Infectado.

## Funcionalidades

### Exploração e navegação
- Sete áreas interligadas.
- Deslocamento por menus numéricos.
- Acesso à Sala de Máquinas condicionado à obtenção do Cartão-chave.
- Laboratórios bloqueados até que o gerador seja ligado.
- Na Sala de Máquinas, selecione `4` e escolha **Cartão-chave (ativar painel do gerador)** para ligar o gerador. O cartão não é consumido.
- Busca por itens com controle de itens já encontrados em cada local.

### Combate
- Encontros aleatórios com zumbis, ratos e morcegos em todos os setores, incluindo Sala de Máquinas e Ala dos Funcionários (o Hall de Entrada continua sem encontros).
- Cada entrada em qualquer área, exceto no Laboratório de Manipulação, tem 35% de chance de gerar um encontro aleatório. O Laboratório de Manipulação é exclusivo do encontro com o boss (Cientista Infectado), sem inimigos aleatórios.
- Chefe final com atributos próprios.
- Ações de atirar, fugir e usar consumíveis.
- Precisão de tiro, munição e dano.
- O inimigo contra-ataca quando permanece vivo.
- Sangramento: ataques inimigos podem causar o estado; enquanto ativo, causa 1 ponto de dano no início de cada turno de combate. O Kit Médico remove o efeito.
- Chance de sangramento por ataque: Zumbi 15%, Ratos 5%, Morcego 20% e Cientista Infectado 25%.
- Combate termina quando um dos lados é derrotado ou o jogador consegue fugir.

### Inventário e itens
- Inventário com contagem de itens.
- Kit Médico: restaura a vida e remove sangramento.
- Sanduíche: recupera até 5 pontos de vida.
- Munição encontrada durante a exploração.
- Cartão-chave e componentes necessários para a progressão.

### Personagem e status
- Vida máxima, dano, precisão, velocidade e munição.
- Exibição do inventário e status atual.
- Estado do gerador, sangramento e nível de infecção disponíveis durante a partida.
- Somente ataques de Zumbi podem transmitir infecção (18% de chance por ataque recebido enquanto o jogador ainda está sem infecção).
- Após a contaminação inicial, a infecção avança um estágio a cada cinco mudanças efetivas de área: Branda, Avançada e Terminal. O contador reinicia a cada progressão.
- A infecção reduz atributos conforme o estágio; no estágio Terminal, o personagem morre.

## Controles

Todas as ações são realizadas pelo teclado:

| Entrada | Ação |
|---|---|
| `1` | Viajar para outro local |
| `2` | Procurar itens no local atual |
| `3` | Mostrar inventário |
| `4` | Usar item: cura ou, na Sala de Máquinas, ativar o painel com o Cartão-chave |
| `5` | Mostrar status do personagem |
| `0` | Encerrar a partida |

Durante o combate:

| Entrada | Ação |
|---|---|
| `1` | Atirar |
| `2` | Tentar fugir |
| `3` | Usar consumível |

As opções de destino e de item são exibidas na tela antes da escolha.

## Estrutura do projeto

```text
rpg-alter/
├── entidades/
│   ├── boss-final.js
│   ├── morcego.js
│   ├── player.js
│   ├── ratos.js
│   └── zumbi.js
├── itens/
│   ├── kit-medico.js
│   └── sanduiche.js
├── mapas/
│   ├── acesso-laboratorios.js
│   ├── ala-funcionarios.js
│   ├── hall-entrada.js
│   ├── laboratorio-animal.js
│   ├── laboratorio-botanica.js
│   ├── laboratorio-manipulacao.js
│   └── sala-maquinas.js
├── sistemas/
│   ├── combate.js
│   ├── encontro.js
│   ├── infeccao.js
│   └── procurar.js
├── prompt.js\n├── package.json
├── package-lock.json
├── README.md
└── rpg-alter.js
```

## Testes e validação

Verifique a sintaxe do arquivo principal:

```bash
npm test
```

O comando acima verifica a sintaxe dos arquivos principais. Os demais módulos também foram verificados com `node --check` durante a revisão. Para jogar, use `npm start`.

## Observações

- O jogo é executado no terminal e utiliza `leitura síncrona nativa do Node.js` para receber entradas.
- Os encontros aleatórios tornam cada exploração um pouco diferente.
- O progresso principal depende dos itens-chave e da ativação do gerador.
- A busca em cada área não repete os mesmos itens na mesma partida; itens repetidos (como os Sanduíches extras) são encontrados individualmente.
- Para reiniciar, encerre e execute `npm start` novamente.

## Tecnologias

- JavaScript (CommonJS)
- Node.js
- leitura síncrona nativa do Node.js

## Licença

Projeto disponibilizado para estudo e desenvolvimento. Adicione uma licença específica caso pretenda redistribuí-lo publicamente.

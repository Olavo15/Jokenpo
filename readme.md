# Yu-gi-oh - Jo-ken

Este é um jogo simples baseado no clássico Jo-ken-pô (pedra, papel e tesoura), mas com cartas de Yu-Gi-Oh. O jogador compete contra o computador usando cartas com atributos "Rock" (Pedra), "Paper" (Papel), e "Scissors" (Tesoura), onde cada carta pode ganhar ou perder de outra, conforme as regras tradicionais do jogo.

## Pré-requisitos

Para rodar o projeto, você precisará de:

- Um navegador moderno (Chrome, Firefox, Edge, etc.)
- Servidor local (opcional para certos navegadores que bloqueiam scripts locais)

## Estrutura do Projeto

- `index.html`: Arquivo HTML principal.
- `src/styles/`: Diretório com os arquivos CSS para estilização.
  - `reset.css`: Reset básico de estilos.
  - `buttons.css`: Estilos para botões.
  - `containers_and_frames.css`: Estilos para containers e frames.
  - `main.css`: Estilos principais da aplicação.
- `src/scripts/`: Contém o arquivo JavaScript que controla a lógica do jogo.
  - `engine.js`: Arquivo principal que controla a lógica do jogo e manipulação da interface.
- `src/assets/`: Contém vídeos, ícones e sons utilizados na interface do jogo.

## Como rodar o projeto

### Opção 1: Abrir diretamente no navegador

1. Clone ou faça o download deste repositório.
2. Navegue até o diretório onde o projeto foi salvo.
3. Dê um duplo clique no arquivo `index.html` para abrir o jogo diretamente no navegador.

### Opção 2: Rodar usando um servidor local (Recomendado)

Alguns navegadores podem bloquear o carregamento de arquivos JavaScript locais por razões de segurança. Para evitar isso, execute o projeto com um servidor local.

#### Usando o VSCode e a extensão Live Server:

1. Abra o diretório do projeto no Visual Studio Code.
2. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
3. Com o projeto aberto, clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
4. O jogo abrirá automaticamente em uma nova aba do navegador.

#### Usando Python (caso não utilize VSCode):

1. Abra o terminal ou prompt de comando.
2. Navegue até a pasta do projeto.
3. Execute o seguinte comando:
   - Para Python 3:
     ```bash
     python -m http.server
     ```
4. Abra o navegador e acesse `http://localhost:8000/`.

### Jogando o jogo

- Ao abrir o jogo, você verá um campo à direita com as cartas disponíveis para o jogador e o computador.
- Ao passar o mouse sobre as cartas, será exibido o nome e o tipo de cada carta.
- Clique em uma carta para jogar contra o computador.
- O resultado será exibido, e o placar será atualizado conforme você ganha ou perde.
- O botão de "próxima partida" aparecerá para você reiniciar o duelo.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Fontes do Google Fonts
- Elementos de mídia como vídeos, ícones e sons

## Melhorias futuras

- Adicionar mais cartas com tipos e efeitos diferentes.
- Melhorar o design responsivo para dispositivos móveis.
- Adicionar animações mais complexas para os duelos.
- Criar uma lógica mais robusta para o placar e sistema de rodadas.

---

**Divirta-se jogando!**

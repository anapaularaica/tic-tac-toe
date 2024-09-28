const cells = document.querySelectorAll('.cell');
// Seleciona todas as células do tabuleiro usando a classe 'cell' e armazena em uma NodeList.

const resetButton = document.getElementById('reset-button');
// Seleciona o botão de reinício do jogo pelo seu ID.

let currentPlayer = 'X';
// Define o jogador atual como 'X'.

let gameState = ['', '', '', '', '', '', '', '', ''];
// Inicializa o estado do jogo com um array vazio, representando as células do tabuleiro.

let isGameActive = true;
// Define se o jogo está ativo (verdadeiro significa que o jogo pode continuar).

// Função para verificar se houve vencedor
function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // Define as condições de vitória (combinações que levam à vitória).

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        // Desestruturação das posições da condição de vitória.

        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            // Verifica se as células estão preenchidas pelo mesmo jogador.
            alert(`Jogador ${gameState[a]} venceu!`);
            // Exibe um alerta informando qual jogador venceu.
            isGameActive = false;
            // Define o jogo como inativo.
            return;
        }
    }

    if (!gameState.includes('')) {
        // Verifica se não há células vazias no estado do jogo.
        alert('Empate!');
        // Exibe um alerta informando que o jogo terminou em empate.
        isGameActive = false;
    }
}

// Função para lidar com o clique nas células
function handleCellClick(event) {
    const cell = event.target;
    // Captura a célula que foi clicada.

    const index = cell.getAttribute('data-index');
    // Obtém o índice da célula clicada a partir do atributo 'data-index'.

    if (gameState[index] !== '' || !isGameActive) {
        // Verifica se a célula já está preenchida ou se o jogo não está ativo.
        return; // Se sim, não faz nada.
    }

    gameState[index] = currentPlayer;
    // Atualiza o estado do jogo com o jogador atual na célula correspondente.
    
    cell.textContent = currentPlayer; 
    // Atualiza o conteúdo da célula para mostrar 'X' ou 'O'.

    checkWinner();
    // Chama a função para verificar se há um vencedor após a jogada.

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    // Alterna o jogador atual entre 'X' e 'O'.
}

// Função para reiniciar o jogo
function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    // Reseta o estado do jogo para células vazias.

    isGameActive = true;
    // Define que o jogo está ativo novamente.

    currentPlayer = 'X';
    // Reinicia o jogador atual para 'X'.

    cells.forEach(cell => {
        cell.textContent = '';
        // Limpa o conteúdo de todas as células no tabuleiro.
    });
}

// Adicionando event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
    // Adiciona um evento de clique a cada célula que chama a função handleCellClick.
});

resetButton.addEventListener('click', resetGame); 
// Adiciona um evento de clique ao botão de reinício que chama a função resetGame.

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

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

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            alert(`Jogador ${gameState[a]} venceu!`);
            isGameActive = false;
            return;
        }
    }

    if (!gameState.includes('')) {
        alert('Empate!');
        isGameActive = false;
    }
}

// Função para lidar com o clique nas células
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (gameState[index] !== '' || !isGameActive) {
        return;
    }

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer; // Mostrando X ou O na célula
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Função para reiniciar o jogo
function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

// Adicionando event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});
resetButton.addEventListener('click', resetGame);

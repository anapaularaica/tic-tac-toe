body {
    background-color: #D7CCC8; /* Define a cor de fundo do corpo como um tom de marrom claro */
    display: flex; /* Usa flexbox para o layout do corpo */
    flex-direction: column; /* Organiza os filhos em uma coluna */
    justify-content: center; /* Centraliza os filhos verticalmente */
    align-items: center; /* Centraliza os filhos horizontalmente */
    height: 100vh; /* Define a altura do corpo como 100% da altura da viewport */
    margin: 0; /* Remove margens padrão do corpo */
    font-family: 'Poppins', sans-serif; /* Aplica a fonte Poppins ao texto */
}

.container {
    text-align: center; /* Centraliza o texto dentro do contêiner */
    z-index: 1; /* Define a camada do contêiner acima de outros elementos */
    margin-top: 20px; /* Adiciona um espaço acima do contêiner */
    color: #5D4037; /* Define a cor do texto como um marrom escuro */
}

#game-board {
    display: grid; /* Usa grid para o layout do tabuleiro */
    grid-template-columns: repeat(3, 120px); /* Cria 3 colunas de 120px cada */
    gap: 10px; /* Define um espaço de 10px entre as células do tabuleiro */
    margin: 20px auto; /* Centraliza o tabuleiro horizontalmente com uma margem superior de 20px */
}

.cell {
    width: 120px; /* Define a largura de cada célula como 120px */
    height: 120px; /* Define a altura de cada célula como 120px */
    display: flex; /* Usa flexbox para o layout das células */
    justify-content: center; /* Centraliza o conteúdo horizontalmente na célula */
    align-items: center; /* Centraliza o conteúdo verticalmente na célula */
    font-size: 2.5em; /* Define o tamanho da fonte dentro das células */
    cursor: pointer; /* Muda o cursor para indicar que a célula é clicável */
    background-color: rgba(222, 184, 135, 0.8); /* Define a cor de fundo das células como um bege claro com transparência */
    border: 2px solid #8D6E63; /* Define a borda das células com uma cor marrom médio */
    transition: background-color 0.3s; /* Define uma transição suave para a cor de fundo */
}

.cell:hover {
    background-color: rgba(210, 180, 140, 0.8); /* Muda a cor de fundo das células para um tom de bege mais escuro quando o mouse passa por cima */
}

#reset-button {
    background-color: rgba(160, 82, 45, 0.8); /* Define a cor de fundo do botão de reinício como marrom */
    color: #ffffff; /* Define a cor do texto do botão como branco */
    transition: background-color 0.3s; /* Define uma transição suave para a cor de fundo do botão */
}

#reset-button:hover {
    background-color: rgba(139, 69, 19, 0.8); /* Muda a cor de fundo do botão para um marrom mais escuro quando o mouse passa por cima */
}

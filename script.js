/**
 * Alterna a visibilidade dos subníveis (listas <ul>)
 * @param {string} id - O ID do elemento ul a ser exibido/escondido
 */
function toggleSub(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.classList.toggle("mostrar");
    }
}

/**
 * Alterna a visibilidade dos cards de informações detalhadas
 * @param {string} id - O ID da div de informação
 */
function toggleCard(id) {
    const card = document.getElementById(id);
    if (card) {
        card.classList.toggle("mostrar-card");
    }
}

/**
 * Esta función me permite tomar una carta.
 * @param {Array<String>} deck es un arraeglo de string
 * @returns {String} Retonra una carta de la baraja recibida.
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
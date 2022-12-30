
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['2C', '3C', '4C', '5C]
 * @returns {String} retorna una carta
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el mazo, o el mazo no existe';
    }
    const carta = deck.pop();
    return carta;
}
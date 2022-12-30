import _ from 'underscore';

/**
 * Esta funcion crea un nuevo mazo
 * @param {Array<String>} tipoDeCarta       Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales   Ejemplo: ['A','J','Q','K'];
 * @returns {array<String>} retorna un nuevo mazo de cartas
 */

export const crearDeck = (tipoDeCarta, tiposEspeciales) => {

    let deck = [];

    if(!tipoDeCarta || tipoDeCarta.length === 0) { throw ': Tipos de carta es obligatorio, y tiene que ser un arreglo de string'; }

    if(!tiposEspeciales || tiposEspeciales.length === 0) { throw ': Tipo de carta especial es obligatorio, y tiene que ser un arreglo de string'; }

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
    
}
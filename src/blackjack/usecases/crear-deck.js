import _ from "underscore";


/**
 * Esta función crea un nuevo deck.
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEscepciales Ejemplo: ['A','J','Q','K']
 * @returns {Array} Retorna un nuevo deck de cartas.
 */
export const crearDeck = (tiposDeCarta, tiposEscepciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarata es obligatorio como un arreglo de string.');
    
    if(!tiposEscepciales || tiposEscepciales.length === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de string.');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEscepciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;
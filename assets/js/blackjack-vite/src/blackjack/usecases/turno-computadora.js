import { pedirCarta, valorCarta } from "./";

/**
 * Turno de la computadora
 * @param {number} puntosMinimos Puntos del jugador, o puntos minimos a superar por la computadora
 * @param {Array{String}} deck Mazo de cartas
 */

export const turnoComputadora = ( puntosMinimos, deck ) => {
    
    if ( !puntosMinimos) {throw ': Debe enviar los puntos minimos'};
    if ( !deck || deck.length === 0 ) {throw 'No hay cartas en el mazo, o el mazo no existe';};
    //if ( !puntosComputadora) {throw ': Debe enviar los puntos de la computadora'};

    let puntosComputadora = 0;
    const puntosHTML = document.querySelectorAll('small'),
          divCartasComputadora = document.querySelector('#computadora-cartas');
    
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
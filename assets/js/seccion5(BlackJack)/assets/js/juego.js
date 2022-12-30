console.time('tiempoApp');

const miModulo = (()=> { 
    'use strict';

    // defino variables y constantes
    let mazo            = [] ;
    const   tipos       = ['C', 'D', 'H', 'S'] ,
            especiales  = ['J','Q','K','A'];

    // let puntosJugador       = 0, 
    //     puntosComputadora   = 0;
    let puntosJugadores = [];

    //referencias HTML
    const   btnPedir  = document.querySelector('#pedirCarta'),
            smalls    = document.querySelectorAll('small');

    const   btnDetener = document.querySelector('#detenerJuego'),
            btnNuevo  = document.querySelector('#nuevoJuego');

    const divCartasJugador = document.querySelectorAll('.divCartas');
    

    const inicializarJuego = ( numeroJugadores = 2) => {

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        divCartasJugador.forEach(element => element.innerText = '');
        puntosJugadores.forEach(element => element = 0);
        smalls.forEach(elem => elem.innerText = '0');

        mazo = crearMazo();

        puntosJugadores = [];

        for(let i = 0; i < numeroJugadores; i++) {
            puntosJugadores.push(0);
        };
    };
    
    //funcion para crear el mazo
    const crearMazo = () => {
        mazo = [] ;

        for ( let i = 2 ; i <= 10; i++ ) {
            
            for ( let tipo of tipos ) {
                mazo.push( i + tipo ) ;    
            };
        };

        for ( let especial of especiales ) {
            
            for ( let tipo of tipos ) {
                mazo.push( especial + tipo );    
            };
        };

        return _.shuffle( mazo );;
    };

    

    //funcion para pedir carta
    
    const pedirCarta = () =>{
        if ( mazo.length === 0 ) {
            throw ': No hay cartas en el mazo';
        }

        return mazo.pop();
    };

    //pedirCarta();

    //funcion para saber el valor de la carta
    const valorCarta = (carta) => {
        let valor = carta.substring(0, carta.length -1);

        return (isNaN(valor) )  ? 
                (valor === 'A') ? 11 : 10
                : valor * 1;

    };

    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        smalls[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador[turno].append(imgCarta);
    };

    const definirGanardor = (puntosMinimos, puntosComputadora)  => {
    
        if (puntosMinimos === 21) {
            console.warn('21, genial!');
        }
        if (puntosComputadora > 21) {
            console.warn('Felicidades, has ganado!');
            btnPedir.disabled = true;
        } else if (puntosComputadora === 21 || (puntosComputadora > puntosMinimos && puntosMinimos < 21)) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
        } 
        
    };

    //Turno de la computadora
    const turnoComputadora = (puntosMinimos) => { 

        let puntosComputadora = 0;

        do {

            const carta = pedirCarta();
            
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length -1 );
            crearCarta( carta, puntosJugadores.length -1 );

            definirGanardor(puntosMinimos, puntosComputadora);

        } while (puntosComputadora <= puntosMinimos);

    };


    //Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        
        puntosJugadores[0] = acumularPuntos(carta, 0);

        crearCarta( carta, 0);

        if(puntosJugadores[0] > 21) {
            turnoComputadora(0);
        } else if (puntosJugadores[0] === 21) {
            turnoComputadora(puntosJugadores[0]);
        };
    });

    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };
})();

console.timeEnd('tiempoApp');
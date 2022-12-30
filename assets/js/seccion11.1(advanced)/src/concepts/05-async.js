import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const id1 = '5d86371f1efebc31def272e2';
    console.log('Inicio de componente');

    findHero( id1 )
     // .then( name => console.log(name) )
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error )

    console.log('Fin del componente');
}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async( id ) => {

    
    const hero = heroes.find( hero => hero.id === id );
    if ( !hero )
        throw `Hero with id ${ id } not found`; //! esto devuelve en el .catch() (SI O SI CN THROW)

    return hero.name; //! esto es lo que devuelve en el .then()

}


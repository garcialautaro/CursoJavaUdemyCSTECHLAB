import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    try {
        //! se pierde velocidad ya que el programa no continua hasta que se resuelve la promesa
        //? en el modulo 07, se explica como solucionar el problema.
        
        const hero1 = await findHero( id1 ); 
        const hero2 = await findHero( id2 );
    
        element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
        
    } catch (error) { //! Si la promesa devuelve un error, la agarra el catch y se puede materializar en un elemento HTML
        element.innerHTML = error;
    }


}


const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero )
        throw `Hero not found`;

    return hero;

}

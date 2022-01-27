/** Library import */
import React from 'react';

/** Component import */
import { CardPokemon } from './CardPokemon';

/** CSS import */
import './Cards.css';

export const Cards = ({pokemons}) => {

    const idRecentPokemon = pokemons[0].url.split('pokemon')[1].split('/')[1]; /** Here we get the number of the pokemon from the url of this */

    if(parseInt(idRecentPokemon) === 151){ /** Validate that they only enter up to pokemon number 151, which are from the first generation */
        pokemons = [pokemons[0]];
        console.log(pokemons);
    }

    const listPokemons = pokemons.map(pokemon=> (
        <li className='cards__pokemonCard' key={pokemon.name}>
            <CardPokemon url={pokemon.url}/>
        </li>
    ));

    return (
        <div className='cards'>
            <ul className='cards__list'>
                {listPokemons}
            </ul>
        </div>
    );
};
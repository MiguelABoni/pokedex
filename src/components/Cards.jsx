import React from 'react';
import { CardPokemon } from './CardPokemon';

export const Cards = ({pokemons}) => {

    const idRecentPokemon = pokemons[0].url.split('pokemon')[1].split('/')[1];

    if(parseInt(idRecentPokemon) === 151){
        pokemons = [pokemons[0]];
        console.log(pokemons);
    }

    const listPokemons = pokemons.map(pokemon=> (
        <li className='cards__pokemonCard' key={pokemon.name} >
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
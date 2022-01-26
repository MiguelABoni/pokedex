import React from 'react';
import { FetchAPI } from './FetchAPI';
import pokeball from '../assets/img/pokeball.png'

import './CardPokemon.css';

export const CardPokemon = ({url}) => {
    const fetchState = FetchAPI(url);

    const {loading, data} = fetchState;

    return (
        <>
            {
                loading
                ?
                /** ANIMATION LOADER */
                <img src={pokeball} alt="Pokeball" title='Pokeball' className='pokeball__loadingAnimation'/>
                :
                <>
                    <details>
                        <summary>
                            <div className='cards__pokemonCard__header'>
                                <h3 className='pokemonCard__id'> {data.id} </h3>
                            </div>
                            <div className='cards__pokemonCard__img'>
                                <img src={data.sprites.other.dream_world.front_default} alt={data.name} title={data.name}/>
                            </div>
                            <div className='cards__pokemonCard__name'>
                                <h3 className='pokemonCard__name'>{data.name}</h3>
                            </div>
                            <img src={pokeball} alt="Pokeball" title='Pokeball' style={{width:"50px"}}/>
                        </summary>
                        {/* MOSTRAR SOLO CUANDO SE LE DE CLICK A LAS TARJETAS */}
                        <div className='cards__pokemonCard__details'>
                            <h3 className='details__weight'>{data.weight}</h3>
                            <h3 className='details__height'>{data.height}</h3>
                            <h3 className='details__exp'>{data.base_experience}</h3>
                            <ul className='details__listType'>
                                {data.types.map(types=> (
                                    <li className='details__listType__item' key={types.slot}>
                                        <div className='details__lisType__tag'>{types.type.name}</div>
                                    </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </details>
                </>
            }
        </>
    );
};
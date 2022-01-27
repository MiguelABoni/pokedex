/** Library import */
import React from 'react';

/** Component import */
import { FetchAPI } from './FetchAPI';

/** Image import */
import pokeball from '../assets/img/pokeball.png';

/** CSS import */
import './CardPokemon.css';

export const CardPokemon = ({url}) => {
    const fetchState = FetchAPI(url); /** The fetch is performed to the component with its respective url */

    const {loading, data} = fetchState;

    return (
        <>
            {
                loading
                ?
                /** Animation Loader */
                <img src={pokeball} alt="Pokeball" title='Pokeball' className='pokeball__loadingAnimation'/>
                :
                <>
                    <details>
                        <summary>
                            <div className='cards__pokemonCard__header'>
                                <h3 className='pokemonCard__id'> {"No. " + data.id} </h3>
                            </div>
                            <div className='cards__pokemonCard__img'>
                                <img src={data.sprites.other.dream_world.front_default} alt={data.name} title={data.name}/>
                            </div>
                            <div className='cards__pokemonCard__name'>
                                <h3 className='pokemonCard__name'>{data.name}</h3>
                            </div>
                            <img src={pokeball} alt="Pokeball" title='Pokeball' className='pokemonCard__pokeball'/>
                        </summary>
                        {/* Shown only when cards are clicked */}
                        <div className='cards__pokemonCard__details'>
                            <h3 className='details__weight'>{"Weight: " + data.weight}</h3>
                            <h3 className='details__height'>{"Height: " + data.height}</h3>
                            <h3 className='details__exp'>{"Exp: " + data.base_experience}</h3>
                            <ul className='details__listType'>
                                {data.types.map(types=> (
                                    <li className='details__listType__item' key={types.slot}>
                                        <div className={`details__listType__tag ${types.type.name}`}>{types.type.name}</div>
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
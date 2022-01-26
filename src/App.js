import React, {useState} from 'react';
import { FetchAPI } from './components/FetchAPI';
import { Cards } from './components/Cards';
import pokemonLogo from './assets/img/PokemonLogo.png';
import pokeball from './assets/img/pokeball.png'

import './App.css';

export const App = () => {
  const MAXIMUM_GENERATION_VALUE = 150;

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
  const fetchState = FetchAPI(url);

  const paginationUrl = url.split('?')[1].split('&');
  const paginationOffset = paginationUrl[0].split('=')[1];
  
  const {loading, data} = fetchState;

  loading ? console.log('...LOADING...') : console.log(data.results);

  return (
    <main className='main'>
      <img src={pokemonLogo} alt='Pokemon Logo' title='Pokemon Logo' style={{width:"500px"}}/>
      <h1 className='main__title'>First Pokemon Generation</h1>
      {
        loading
        ?
        /** ANIMATION LOADER */
        <img src={pokeball} alt="Pokeball" title='Pokeball' className='pokeball__loadingAnimation'/>
        :
        <>
          <Cards pokemons={data.results}/>
          <div className='main__buttons'>
            <button onClick={() => {setUrl(data.previous)}} disabled={data.previous === null}>prev</button>
            <button onClick={() => {setUrl(data.next)}} disabled={parseInt(paginationOffset) === MAXIMUM_GENERATION_VALUE}>Next</button>
          </div>
        </>
      }
    </main>
  );
}
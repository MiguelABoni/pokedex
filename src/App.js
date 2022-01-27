/** Library import */
import React, {useState} from 'react';

/** Component import */
import { FetchAPI } from './components/FetchAPI';
import { Cards } from './components/Cards';

/** Image import */
import pokemonLogo from './assets/img/PokemonLogo.png';
import pokeball from './assets/img/pokeball.png';

/** CSS import */
import './App.css';

export const App = () => {
  const MAXIMUM_GENERATION_VALUE = 150; /** Variable that has the pages of the first generation of pokemons */

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
  const fetchState = FetchAPI(url);

  const paginationUrl = url.split('?')[1].split('&');
  const paginationOffset = paginationUrl[0].split('=')[1];
  
  const {loading, data} = fetchState;

  return (
    <main className='main'>
      <img src={pokemonLogo} alt='Pokemon Logo' title='Pokemon Logo' className="main__logo"/>
      <h1 className='main__title'>First Pokemon Generation</h1>
      {
        loading
        ?
        /** Animation Loader */
        <img src={pokeball} alt="Pokeball" title='Pokeball' className='pokeball__loadingAnimation'/>
        :
        <>
          {/** Rendering of the first 10 pokemons */}
          <Cards pokemons={data.results}/>
          {/** Buttons that help with pagination */}
          <div className='main__buttons'>
            <button onClick={() => {setUrl(data.previous)}} disabled={data.previous === null}>prev</button>
            <button onClick={() => {setUrl(data.next)}} disabled={parseInt(paginationOffset) === MAXIMUM_GENERATION_VALUE}>Next</button>
          </div>
        </>
      }
    </main>
  );
}
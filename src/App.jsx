import { useEffect, useState } from 'react';
import api from './api';

// import { Pokemon } from './components/Pokemon';
import { Home } from './pages/Home';

function App() {

  // const [pokemon,setPokemon] = useState([])
  // const [infoPokemon, setInfoPokemon] = useState([])
  // const [idPokemon, setIdPokemon] = useState([])

  // useEffect(() => {
  //   api.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then(({data}) => {
  //     setPokemon(data.results)
  //     // console.log(data)
  //   }, [])
  // })
  

  return (
    
    <div >
      <Home></Home>

    </div>
  );
}

export default App;

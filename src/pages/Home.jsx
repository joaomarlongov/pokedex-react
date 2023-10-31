import { Container, Grid } from "@mui/material"
import { Box } from '@mui/material';
import Navbar from "../components/Navbar"
import PokemonCard from "../components/PokemonCard"
import axios from "axios";
import { useEffect, useState } from "react";
import { Skeletons } from "../components/Skeletons";
import { useNavigate } from "react-router-dom";

export const Home = ({setPokemonData}) => {


    const [pokemons, setPokemons] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        getPokemon()
    }, [])

        const getPokemon = () => {

            let endpoints= []

            for(let i = 1; i <= 151; i++){
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            }

            let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
        }

        const pokemonFilter = (name) => {
            let filteredPokemons = []
            if(name == ""){
                getPokemon()
            }
            for (let i in pokemons){
                if(pokemons[i].data.name.includes(name)){
                    filteredPokemons.push(pokemons[i])
                    
                }
            }
            setPokemons(filteredPokemons)
        }
    
        const primeiraLetraM = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const pokemonPickHandler = (pokemonData) => {
            setPokemonData(pokemonData)
            navigate("/details")
          };

    return(
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? <Skeletons /> : 
                    pokemons.map((pokemon, key) => 
                    <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                        <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                            <PokemonCard name={primeiraLetraM(pokemon.data.name)} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                        </Box>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    )
}

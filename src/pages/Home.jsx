import { Container, Grid } from "@mui/material"
import Navbar from "../components/Navbar"
import PokemonCard from "../components/PokemonCard"
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {


    const [pokemons, setPokemons] = useState([])

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
    

    return(
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.map((pokemon, key) => 
                    <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                        <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    )
}

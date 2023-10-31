import { Container, Typography, Box,Paper } from "@mui/material"
import Navbar from "../components/Navbar"
import { PokemonDetails } from "../components/PokemonDetails"




import axios from "axios";
import { useState, useEffect } from "react"
import PokemonStats from "../components/PokemonStats";



export const Details = ({pokemonData}) => {

    const {name, sprites } =(pokemonData)

    function primeiraLetraM(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const nomePokemonM = primeiraLetraM(name);

    return(
        <div>
            <Navbar/>

            <Container>
                <Paper style={{width:"300px"}} elevation={3}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>{nomePokemonM}</h1>
                            <Box component="img" src={sprites.front_default} style={{width:"130px"}}/>
                            <PokemonDetails/>
                            <PokemonStats pokemonData={pokemonData}/>
                    </Box>
                </Paper>
            </Container> 

        </div>
    )
}

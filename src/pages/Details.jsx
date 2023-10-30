import { Container, Typography, Box } from "@mui/material"
import Navbar from "../components/Navbar"
import { PokemonDetails } from "../components/PokemonDetails"




import axios from "axios";
import { useState, useEffect } from "react"



export const Details = ({pokemonData}) => {


    const {name, sprites, base_experience } =(pokemonData)
    return(
        <div>
            <Navbar/>

            <Container>
               <h1>{name}</h1>
                <Box component="img" src={sprites.front_default}/>
                <h2>XP Base: {base_experience}</h2>
                <PokemonDetails/>
            </Container> 

        </div>
    )
}

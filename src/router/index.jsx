import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { useState } from "react";

export const  Router = () => {

    const [pokemonData,setPokemonData] = useState()

    return(

        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home setPokemonData={setPokemonData}/>} />
                    <Route path="/details" element={<Details pokemonData={pokemonData}/>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
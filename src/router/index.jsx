import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export const  Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/details" element={<Details/>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'

const Router = () => {
    const [pokemonData, setPokemonData] = useState();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Pokedex' element={<Home setPokemonData={setPokemonData} />} />
                <Route path='/profile' element={<Profile pokemonData={pokemonData} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
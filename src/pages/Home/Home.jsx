import axios from 'axios';
import styles from './Home.module.css';

import { useEffect, useState } from "react"
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


const Home = ({ setPokemonData }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    let [quantitity, setQuantitity] = useState(50);

    const navigate = useNavigate();

    const getPokemons = () => {
        let endpoints = [];
        for (let i = 1; i <= quantitity; i++) {
            endpoints.push(` https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        setLoading(true);
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(res => setPokemons(res));
        setLoading(false);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    const more = () => {
        setPokemons([]);
        setQuantitity(quantitity += 50);
        getPokemons();
    }

    const less = () => {
        if (quantitity === 50) {
            setQuantitity(50);
        } else {
            setPokemons([]);
            setQuantitity(quantitity -= 50);
            getPokemons();
        }
    }

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/profile");
    }

    const pokemonSearch = (name) => {
        let filteredPokemons = [];
        if (name === "") {
            getPokemons();
        }
        for (let i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    }

    return (
        <>
            <Navbar pokemonSearch={pokemonSearch} />
            <div className={styles.home}>
                {loading ? <h1>Loading...</h1> :
                    pokemons.map((pokemon, key) => (
                        <div className={styles.card_container} onClick={() => pokemonPickHandler(pokemon.data)} key={key}>
                            <Card name={pokemon.data.name} image={pokemon.data.sprites.other.showdown.front_default} id={pokemon.data.id} types={pokemon.data.types} loading={loading} />
                        </div>
                    ))
                }
            </div>
            <div className={styles.btn_div}>
                <button className={styles.more_button} onClick={() => less()}>- 50</button>
                <button className={styles.more_button} onClick={() => more()}>+ 50</button>
            </div>
        </>
    )
}

export default Home
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';
import { useEffect } from 'react';

const Profile = ({ pokemonData }) => {

    const { name, id, types, stats, height, weight } = pokemonData || {};
    const navigate = useNavigate();

    useEffect(() => {
        if (!pokemonData) {
            navigate("/Pokedex");
        }
    }, []);

    if (!pokemonData) {
        return null;
    }

    let cm = height * 10;
    let metros = cm / 100;

    let g = weight * 100;
    let kg = g / 1000;

    //console.log(pokemonData);
    return (
        <div className={styles.info_container}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
            <div className={styles.content}>
                <p>#{id}</p>
                <h1>{name}</h1>
                <h3>Elements Pokemon</h3>
                <div className={styles.types}>
                    {types.map((type) => {
                        return (
                            <>
                                <div className={`color-${type.type.name}  ${styles.type}`}>
                                    <span>{type.type.name}</span>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className={styles.div_stats}>
                    <h3>Status</h3>
                    {
                        stats.map((stat) => {
                            return (
                                <>
                                    <h5 className={styles.item_stats}>
                                        <span className={styles.name}>{stat.stat.name}</span>
                                        <progress value={stat.base_stat} max={160}></progress>
                                        <span className={styles.number}>{stat.base_stat}</span>
                                    </h5>
                                </>
                            )
                        })
                    }
                </div>
                <div className={styles.div_datas}>
                    <div className={styles.weight_group}>
                        <h3>weight</h3>
                        <span>{kg} kg</span>
                    </div>

                    <div className={styles.height_group}>
                        <h3>height</h3>
                        <span>{metros} m</span>
                    </div>
                </div>
                <button className={`color-${types[0].type.name} ${styles.return_btn}`} onClick={() => navigate("/Pokedex")}>Voltar</button>
            </div>
        </div>

    )
}

export default Profile
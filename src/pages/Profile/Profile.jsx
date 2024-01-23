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
                        <span>{weight}00g</span>
                    </div>

                    <div className={styles.height_group}>
                        <h3>height</h3>
                        <span>{height}0 cm</span>
                    </div>
                </div>
                <button className={`color-${types[0].type.name} ${styles.return_btn}`} onClick={() => navigate("/Pokedex")}>Voltar</button>
            </div>
        </div>

    )
}

export default Profile
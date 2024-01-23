import styles from './Navbar.module.css';

const Navbar = ({ pokemonSearch }) => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Buscar Pokemon...' className={styles.navbar} onChange={(e) => pokemonSearch(e.target.value)} />
        </div>
    )
}

export default Navbar
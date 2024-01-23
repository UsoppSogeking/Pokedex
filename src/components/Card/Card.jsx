import styles from '../Card/Card.module.css';

const Card = ({ name, image, id, types }) => {

    return (
        <div className={styles.card_container} key={id}>
            <img src={image} alt="" className={styles.card_image} />
            <div className={styles.card_content}>
                <span className={styles.card_id}>N°{id}</span>
                <h2 className={styles.card_name}>{name}</h2>
                <div className={styles.card_types}>
                    {types.map((type) => {
                            return (
                                <>
                                    <div className={` color-${type.type.name} ${styles.types_group}`}>
                                        <h4>{type.type.name}</h4>
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Card
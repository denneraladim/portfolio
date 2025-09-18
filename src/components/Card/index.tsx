
import styles from "./Card.module.scss";


const Card = () => {
    return (
        <section className={styles.card}>
            <h3>Título do projeto</h3>
            <p>Texto descritivo do projeto</p>
            <div className={styles.card_footer}>
                <button className={styles.card_botao}>
                    Ver código
                </button>
                <button className={styles.card_botao}>
                    Acessar Projeto
                </button>
            </div>
        </section>
    )
}

export default Card;
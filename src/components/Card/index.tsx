
import styles from "./Card.module.scss";

interface cardProps {
    title: string;
    description: string
    html_url: string;
}

const Card = ({ title, description, html_url }: cardProps) => {
    return (
        <section className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card_botao}
                >
                    Ver Código
                </a>
            </div>
        </section>
    )
}

export default Card;
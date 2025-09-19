
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

interface cardProps {
    title:string;
    description:string
    html_url:string;
    homepage?:string;
}

const Card = ({title, description,html_url}:cardProps) => {
    return (
        <section className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <Link to={html_url} className={styles.card_botao}>Ver Código</Link>
                <Link to={html_url} className={styles.card_botao}>Acessar Projeto</Link>
            </div>
        </section>
    )
}

export default Card;
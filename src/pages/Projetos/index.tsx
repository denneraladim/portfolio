
import Card from "../../components/Card";
import styles from "./Projetos.module.scss";


const Projetos = () => {
    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            <section className={styles.lista}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </section>
    )
}

export default Projetos;

import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.scss";

interface Repository {
    id:number;
    name:string;
    html_url:string;
    description:string | null;
}

const Projetos = () => {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(()=>{
        const buscarRepositorios = async () => {
            const response = await fetch("https://api.github.com/users/denneraladim/repos")

            const data = await response.json()

            setRepositories(data)
        }
        buscarRepositorios()

    },[])
    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
           {
            repositories.length > 0 ? (
            <section className={styles.lista}>
                <Card/>
            </section>
            ) : (
                <p>Carregando repositórios...</p>
            )
           }
        </section>
    )
}

export default Projetos;
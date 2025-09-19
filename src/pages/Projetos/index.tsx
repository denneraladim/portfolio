
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.scss";

interface Repository {
    id:number;
    name:string;
    html_url:string;
    description:string;
}

const Projetos = () => {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(()=>{
        const buscarRepositorios = async () => {
            const response = await fetch("https://api.github.com/users/denneraladim/repos?pages=1&per_page=20")

            const data = await response.json()

            const filtrados = data.filter((repo:Repository)=>{
                return repo.name !== "denneraladim";
            })

            setRepositories(filtrados);
        }
        buscarRepositorios()

    },[])
    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
           {
            repositories.length > 0 ? (
            <section className={styles.lista}>
                {
                    repositories.map((repo)=>(
                        <Card
                         key={repo.id}
                         title={repo.name}
                         description={repo.description || "Sem descrição"}
                         html_url={repo.html_url}
                        />
                    ))
                }
            </section>
            ) : (
                <p>Carregando repositórios...</p>
            )
           }
        </section>
    )
}

export default Projetos;
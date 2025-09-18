import type { JSX } from "react";

import { Link } from "react-router-dom";


import styles from "./Home.module.scss";

const Home = (): JSX.Element => {
    return (
        
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá sou,<br />
                    <span>Denner Aladim</span><br />
                    Dev Front End Júnior
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles['btn-red']}`}>Saiba mais</Link>
            </div>
            <figure>
                <img src="./developer_blue.svg" alt="Imagem de Home" />
            </figure>
        </section>
    )
}

export default Home;
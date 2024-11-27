import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <p>
                        Olá sou,<br />
                        <span>Denner Aladim</span><br />
                        Dev Front End
                    </p>
                    <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}`}>
                        Saiba mais
                    </Link>
                </div>
                <figure>
                    <img src="/developer_blue.svg" alt="Imagem da Home" />
                </figure>
            </section>


    )
}

export default Home;
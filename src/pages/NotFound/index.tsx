
import type { JSX } from "react";

import styles from "./NotFound.module.scss";


const NotFound = (): JSX.Element => {
    return (

        <section className={styles.notFound}>
            <h2 className={styles.titulo2}>Algo esta Errado!</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span><br />
                <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
            </div>
        </section>
    )
}

export default NotFound;
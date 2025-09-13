
import styles from "./Header.module.scss";

import type { JSX } from "react";


const Header = ():JSX.Element => {
    return(
        <header className={styles.header}>
            <span>denneraladim.dev</span>
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Contatos</a>
            </nav>
        </header>
    )
}

export default Header;


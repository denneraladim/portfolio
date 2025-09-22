

import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import type { JSX } from "react";

const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <span>dennerAladim.dev</span>
            </Link>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}

export default Header;
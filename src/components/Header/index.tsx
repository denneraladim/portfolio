

import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState, type JSX } from "react";

const Header = (): JSX.Element => {

    const [showMenu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!showMenu);
    }

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <span>denner.dev</span>
            </Link>
            
            <nav
             className={`${styles.menuSandwich} ${showMenu ? styles.show : ""}`}
             >
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
            <div
             className={styles.menuButton}
             onClick={toggleMenu}
             >
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    )
}

export default Header;
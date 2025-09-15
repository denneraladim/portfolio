
import styles from "./Footer.module.scss";

import type { JSX } from "react";

const Footer = ():JSX.Element => {
    return(
        <footer className={styles.footer}>
          Feito por Denner Aladim &copy; 2025
        </footer>
    )
}

export default Footer;
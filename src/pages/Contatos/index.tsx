
import styles from "./Contatos.module.scss";

import type { JSX } from "react";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";


import { GoMail } from "react-icons/go";


const Contatos = (): JSX.Element => {
  return (

    <main className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em Contato</h3>
      <p>Para conversarmos sobre projetos e oportunidades.</p>
      <div className={styles.icones}>
        <a
          href="mailto:dennerdangelo57@gmail.com"
          target="_blank"
          rel='noopener noreferrer'
          aria-label="Enviar email">
          <GoMail className={styles.icone} />
        </a>
        <a
          href="https://wa.me/5531997828024" target='_blank' rel='noopener noreferrer'
          aria-label="Enviar Mensagem">
          <FaWhatsapp className={styles.icone} />
        </a>

        <a
          href='https://www.linkedin.com/in/Denner-Dangelo-Aladim-de-castro/' target='_blank' rel='noopener noreferrer'
          aria-label="Visitar perfil no LinkedIn">
          <FaLinkedin className={styles.icone} />
        </a>
      </div>
    </main>
  )
}

export default Contatos;
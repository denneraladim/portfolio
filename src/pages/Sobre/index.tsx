import type { JSX } from "react";

import styles from "./Sobre.module.scss";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import Foto from "./images/denner.png";

const Sobre = (): JSX.Element => {
  return (
    <>

      <section className={styles.sobre}>
        <div className={styles.bio}>
          <img src={Foto} alt="Foto" className={styles.Foto} />
          <div className={styles.textos}>
            <h2>Sobre</h2>
            <p>Sou <span>Denner Aladim</span><br />
              <strong>Desenvolvedor Front End Júnior</strong></p>
            <p>Trabalho com desenvolvimento web criando interfaces intuitivas e funcionais, buscando oportunidades para contribuir com projetos inovadores e aprender continuamente.</p>
            <p>Meu objetivo é transformar ideias em experiências digitais com foco em design responsivo e entregando soluções que encantem os usuários.</p>
            <p>Tenho paixão por criar interfaces limpas e interativas, sempre focando na experiência do usuário.</p>
          </div>
        </div>
        <div className={styles.techs}>
          <h3>Techs</h3>
          <div className={styles.icones}>
            <FaHtml5 className={styles.icone} />
            <FaCss3 className={styles.icone} />
            <FaJs className={styles.icone} />
            <SiTypescript className={styles.icone} />
            <FaReact className={styles.icone} />
          </div>
        </div>
      </section>

    </>
  )
}

export default Sobre;
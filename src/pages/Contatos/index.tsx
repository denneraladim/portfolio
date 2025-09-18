import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from "./Contatos.module.scss";

const Contatos = () => {
    return (
        <>
          <Header/>
         <Container>
           <section className={styles.contatos}>
              <h2>Contatos</h2>
              <h3>Entre em Contato</h3>
              <p>Para conversarmos sobre projetos e oportunidades.</p>
              <div className={styles.icones}>
                Ícones
              </div>
            </section> 
         </Container>
          <Footer/>
        </>
    )
}

export default Contatos;
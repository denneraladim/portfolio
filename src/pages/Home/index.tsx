import type { JSX } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Home = ():JSX.Element => {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>
                    <p>
                        Olá sou,<br />
                        <span>Denner Aladim</span><br />
                        Dev Front End Júnior
                    </p>
                    <Link to="/sobre" className='btn btn-red'>Saiba mais</Link>
                </div>
                <figure>
                    <img className='img-home' src="./developer_blue.svg" alt="Imagem de Home" />
                </figure>
            </section>
            <Footer />
        </>
    )
}

export default Home;
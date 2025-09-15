
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
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
          <button className='btn btn-red'>Saiba mais</button>
        </div>
        <figure>
          <img className='img-home' src="./web-developer.svg" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default App;

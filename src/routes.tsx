import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Projetos from "./pages/Projetos";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Container>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/sobre" element={ <Sobre/>}/>
                <Route path="/projetos" element={ <Projetos/>}/>
                <Route path="/contatos" element={ <Contatos/>}/>
                <Route path="*" element={ <NotFound/>}/>
            </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;


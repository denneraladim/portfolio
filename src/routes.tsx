import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Projetos from "./pages/Projetos";
import NotFound from "./pages/NotFound";
import PageBase from "./pages/PageBase";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase/>}>
                    <Route index element={ <Home/>}/>
                    <Route path="/sobre" element={ <Sobre/>}/>
                    <Route path="/projetos" element={ <Projetos/>}/>
                    <Route path="/contatos" element={ <Contatos/>}/>
                    <Route path="*" element={ <NotFound/>}/>
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;



import type { JSX } from "react";
import { Outlet } from "react-router-dom";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PageBase = ():JSX.Element => {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase;
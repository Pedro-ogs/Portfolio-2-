import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import QuemEuSou from '../pages/QuemEuSou';
import Projetos from '../pages/Projetos';
import Cliente from '../pages/Cliente';
import Contato from '../pages/Contato';
import Home from '../pages/Home';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Home />} path='/' exact />
                <Route element = {<QuemEuSou />} path="/quem-eu-sou" />
                <Route element = {<Projetos />} path="/projetos"/>
                <Route element = {<Cliente />} path="/cliente"/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
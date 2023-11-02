import adotaPets from "../imagem/adotaPets.jpeg";
import calculadora from "../imagem/calculadora.png";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import "../style/Projetos.css";

function Projetos() {
    return (
        <>
            <Header />
            <div className="contentCorpo">
                <Carousel className="carousel" data-bs-theme="dark">
                    <Carousel.Item className="carouselItem">
                        <img
                            className="imagemAdotaPets"
                            src={adotaPets}
                            alt="First slide"
                        />
                        <Carousel.Caption className="carouselCaption">
                            <Stack gap={1}>
                                <div className="p-2">
                                    <h5>AdotaPets</h5>
                                </div>
                                <div>
                                    <p>
                                        O projeto "AdotaPets" é uma plataforma online inovadora e compassiva que visa conectar 
                                        animais de estimação em busca de um lar amoroso com pessoas que desejam abrir seus 
                                        corações e lares para um novo membro da família. Com um compromisso firme com o bem-estar 
                                        animal e a responsabilidade social, o AdotaPets oferece uma experiência completa e 
                                        amigável para ajudar a facilitar o processo de adoção.
                                        Através do site AdotaPets, os usuários podem explorar perfis detalhados de animais
                                        disponíveis para adoção, incluindo cães, gatos e outros animais de companhia.
                                    </p>
                                </div>
                            </Stack>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselItem">
                        <img
                            className="imagemCalc"
                            src={calculadora}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="carouselCaption">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer />
        </>
    );
}

export default Projetos
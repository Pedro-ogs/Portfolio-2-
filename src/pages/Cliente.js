import Footer from "../components/Footer";
import Header from "../components/Header";
import dellImg from "../imagem/Dell_Logo.png";
import imgImg from "../imagem/IMB-logo.jpg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import "../style/Cliente.css"

function Cliente() {
    return (
        <div>
            <Header />
            <div className="d-flex justify-content-around">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="ibm-img" variant="top" src={imgImg} />
                    <Card.Body>
                        <Card.Title>IBM</Card.Title>
                        <Card.Text>
                        A IBM, ou International Business Machines Corporation, é uma das empresas mais icônicas 
                        e influentes do setor de tecnologia da informação e computação.
                        </Card.Text>
                        <Button variant="primary">Ler mais</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className="dell-img" variant="top" src={dellImg} />
                    <Card.Body>
                        <Card.Title> Dell</Card.Title>
                        <Card.Text>
                        A Dell Inc., comumente referida como Dell, é uma das maiores empresas de tecnologia 
                        do mundo e é conhecida principalmente por suas soluções em hardware e 
                        serviços relacionados a computadores
                        </Card.Text>
                        <Button variant="primary">Ler mais</Button>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </div>
    );
}

export default Cliente
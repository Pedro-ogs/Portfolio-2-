
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/QuemEuSou.css';
import Card from 'react-bootstrap/Card';


function QuemEuSou() {
    return (
        <>
            <Header />
            <div className='card-container'>
                <Card className='cardBox' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Quem Eu Sou </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">--------</Card.Subtitle>
                        <Card.Text>
                            Meu nome é Pedro Oliveira Gomes e Silva, tenho 22 anos e atualmente estou cursando
                            a faculdade de Computação no CEFET MG. Estou apaixonado por tecnologia e adoro
                            explorar o mundo da programação. e esta é uma página simples para compartilhar
                            um pouco sobre mim.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card className='cardBox' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Experiencia </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">--------</Card.Subtitle>
                        <Card.Text>
                            - Estagio de 2 anos na empresa Seidor, onde aprendi mais sobre Sap e desenvolvi em ABAP.
                        </Card.Text>
                        <Card.Text>
                            - Curso de desenvolvedor de aplicativos no Senai, onde aprendi um pouco sobre javaScrip, html e css
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card className='cardBox' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Um pouco sobre mim </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">--------</Card.Subtitle>
                        <Card.Text>
                            Eu sou apaixonado por leitura, cozinha e esportes e adoro poder jogar nos fins de semana.
                        </Card.Text>
                        <Card.Text>
                            Esta página é uma maneira de me apresentar e compartilhar minhas experiências.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>
    );
}

export default QuemEuSou
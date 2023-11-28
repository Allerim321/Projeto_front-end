import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'

function Header(btn) {
    return (
        <header>
            <Navbar variant='dark'>
                <Container>
                    <Navbar.Brand>
                        Minha empresa
                    </Navbar.Brand>
                    {btn ? (
                    <div className='d-flex gap-3'>
                        <Button>Adicionar</Button>
                        <Button>Sair</Button>
                        </div>
                    ) : ""}
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
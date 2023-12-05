import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Header(btn) {

    function Sair(){
        localStorage.removeItem("key")
    }
    
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
                        <Button onClick={Sair}>Sair</Button>
                        </div>
                    ) : ""}
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
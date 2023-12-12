import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Adicionar from './Adicionar'

function Header(btn) {
    
    const [show, setShow] = useState(false)

    function Sair(){
        localStorage.removeItem("key")
        location.href="/"
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
                        <Button onClick={() =>{setShow(true)}}>Adicionar</Button>
                        <Button onClick={Sair}>Sair</Button>
                        </div>
                    ) : ""}
                </Container>
                <Adicionar show={show} setShow={setShow}/>
            </Navbar>
        </header>
    )
}

export default Header
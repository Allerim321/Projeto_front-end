import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Excluir({id}){
    return(
        <div>
            <span></span>
            <Modal show={true}>
                <Modal.Header closeButton><h2>Excluir</h2></Modal.Header>
                <Modal.Body><p>Deseja excluir o item?</p></Modal.Body>
                <Modal.Footer><Button>Excluir</Button></Modal.Footer>
            </Modal>
        </div>
    )
}

export default Excluir
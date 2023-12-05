import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function Excluir({id}){
    const [show, setShow] = useState(true)
    return(
        <div>
            <span></span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton><h2>Excluir</h2></Modal.Header>
                <Modal.Body><p>Deseja excluir o item?</p></Modal.Body>
                <Modal.Footer><Button class="btn btn-outline-danger">Excluir</Button></Modal.Footer>
            </Modal>
        </div>
    )
}

export default Excluir
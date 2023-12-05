import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Formulario from './Formulario';

function Editar({id}){
    const [show, setShow] = useState(true)
    
    function EditarDados(){
        axios.delete("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then(() =>location.reload).catch((erro) =>{ console.log("Erro ao excluir")
    })}

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}><CiEdit /></span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton><h2>Editar</h2></Modal.Header>
                <Modal.Body><Formulario /></Modal.Body>
                <Modal.Footer><Button onClick={EditarDados} class="btn btn-outline-primary">Editar</Button></Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editar
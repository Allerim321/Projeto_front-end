import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";


function Excluir({id}){
    const [show, setShow] = useState(true)
    
    function ExcluirDados(){
        axios.delete("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then(() =>location.reload).catch((erro) =>{ console.log("Erro ao excluir")
    })}

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}><AiOutlineDelete /></span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton><h2>Excluir</h2></Modal.Header>
                <Modal.Body><p>Deseja excluir o item?</p></Modal.Body>
                <Modal.Footer><Button onClick={ExcluirDados} class="btn btn-outline-danger">Excluir</Button></Modal.Footer>
            </Modal>
        </div>
    )
}

export default Excluir
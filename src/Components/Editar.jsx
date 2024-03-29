import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import Formulario from './Formulario';

function Editar({id}){
    const [show, setShow] = useState(false)
    const [funcionario, setFuncionario] = useState(false)
    useEffect(() =>{
            axios.get("http://localhost:5173/funcionarios/" + id)
            .then((resposta) => {
                setFuncionario(resposta.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    function EditarDados(){
        axios.delete("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then(() =>location.reload).catch((erro) =>{ console.log("Erro ao excluir")
    })}

    return(
        <div>
            <span style={{cursor: "pointer"}} onClick={() => setShow(true)}>
                <MdEdit size={20} className="text-primary"/>
                </span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Editar</h2>
                    </Modal.Header>
                <Modal.Body>
                    <Formulario id={id} setShow={setShow}/>
                    </Modal.Body>
                <Modal.Footer><Button onClick={EditarDados} class="btn btn-outline-primary">Editar</Button></Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editar
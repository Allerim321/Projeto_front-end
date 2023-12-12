import Modal from "react-bootstrap/Modal"
import Formulario from "./Formulario"

function Adicionar({show, setShow}) {
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header>
                    <h2>Adicionar</h2>
                </Modal.Header>
                <ModalBody>
                    <Formulario />
                </ModalBody>
            </Modal>
        </>
    )
}

export default Adicionar
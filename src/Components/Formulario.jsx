import axios from 'axios'
import Form from 'react-bootstrap/Form'
 

function Formulario(funcionario, setShow) {

    function enviarDados(event){
        const nome = event.target[0].value
        const cargo = event.target[1].value
        const departamento = event.target[2].value
        const salario = event.target[3].value
    }

    if(funcionario){
        axios.put(" http://localhost:5173/funcionarios/" + funcionario.id, 
        {
            nome,
            cargo,
            departamento,
            salario
        }).then(() => {
            setShow(false)
            window.location.reload()
        })
    } else{
        axios.post(" http://localhost:5173/funcionarios/",
        {
            nome,
            cargo,
            departamento,
            salario
        })
    }

    return(
        <Form onSubmit={enviarDados}>
            <Form.Group>
                <Form.Label>Nome:</Form.Label>
                <Form.Control type='text' defaultValue={funcionario?.nome}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Cargo:</Form.Label>
                <Form.Control type='text' defaultValue={funcionario?.cargo}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Departamento:</Form.Label>
                <Form.Control type='text' defaultValue={funcionario?.departamento}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Salário:</Form.Label>
                <Form.Control type='text' defaultValue={funcionario?.salario}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control className='btn btn primary mt-3' type='submit'></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default Formulario
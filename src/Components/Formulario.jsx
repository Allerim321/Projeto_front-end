import Form from 'react-bootstrap/Form'

function Formulario(id) {

    function enviarDados(event){
        const nome = event.target[0].value
        const cargo = event.target[1].value
        const departamento = event.target[2].value
        const salario = event.target[3].value
    }

    if(id){
        axios.put(" http://localhost:5173/funcionario/" + id
        , )
    }
    
    return(
        <Form onSubmit={enviarDados}>
            <Form.Group>
                <Form.Label>Nome:</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Cargo:</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Departamento:</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Salário:</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control className='btn btn primary mt-3' type='submit'></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default Formulario
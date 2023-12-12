import Form from 'react-bootstrap/Form'

function Formulario(params) {
    return(
        <Form>
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
                <Form.Control type='submit'></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default Formulario
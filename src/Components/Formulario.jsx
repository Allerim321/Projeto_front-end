import Form from 'react-bootstrap/Form'

function Formulario(params) {
    return(
        <Form>
            <Form.Group>
                <Form.Label>Nome:</Form.Label>
                <Form.Control type='text'></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default Formulario
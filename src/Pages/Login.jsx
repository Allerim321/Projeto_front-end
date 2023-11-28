import { FormControl, FormGroup, FormLabel } from "react-bootstrap"
import Conteudo from "../Components/Conteudo"
import Header from "../Components/Header"

function Login() {
    return (
        <>
        <Header btn={false} />
        <Conteudo>
            <Form>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email"
                    placeholder="name@example.com"></FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Senha</FormLabel>
                    <FormControl type="password"></FormControl>
                </FormGroup>
            </Form>
        </Conteudo>
        </>
    )
}

export default Login
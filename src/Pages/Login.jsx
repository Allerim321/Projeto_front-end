import { FormControl, FormGroup, FormLabel } from "react-bootstrap"
import Conteudo from "../Components/Conteudo"
import Header from "../Components/Header"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

function Login() {
    //alert representa a variavel e setAlert representa a função que será executada a partir da variável criada
    const [alert, setAlert] = userState(false);

    function Autenticar(event){
        //preventDefaul irá
        event.preventDefault()
        const email = event.target[0].value
        const pass = event.target[1].value

        if (email === "admin@admin" && pass === "123"){
            //o método a seguir irá proteger a rota
            localStorage.setItem("key", "token")
            location.href = "/painel"
        }else{
            setAlert(true)
            //setTimeOut irá fazer com que a mensagem de alerta saia da tela após 3 segundos
            setTimeout(() =>{
                setAlert(false)
            }, 3000)
        }
    }


    return (
        <>
        <Header btn={false} />
        <Conteudo>
            <Form onSubmit={Autenticar}>
                <Form.Group>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email"
                    placeholder="name@example.com"></FormControl>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Button className="mt-3" type="submit">Login</Button>
                {alert ? <Alert className="mt-3" variant="danger">Usuário ou senha incorreto</Alert> : ""}
            </Form>
        </Conteudo>
        </>
    )
}

export default Login
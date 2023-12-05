import Table from 'react-bootstrap/Table'
import Axios from 'axios'

Axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios").then(
    (resposta) =>{
        console.log(resposta.data)
    }).catch(
        (error) =>{
            console.log(error)
        })
function Tabela(){
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </>
    )
}

export default Tabela
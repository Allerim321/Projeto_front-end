import Table from 'react-bootstrap/Table'
import Axios from 'axios'

//criando uma array vazia para guardar os dados da tabela
const[dados, setDados] = useState([])

//utilizando a biblioteca axios, o método get fará uma requisição de dados
Axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios").then(
    (resposta) =>{
        setDados(resposta.data)
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
                {/* passando os dados requeridos pela biblioteca Axios para a tabela */}
                <tbody>
                    {dados.map((item, key) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.cargo}</td>
                            <td></td>
                        </tr>
                   ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tabela
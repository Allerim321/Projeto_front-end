import Table from 'react-bootstrap/Table'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import Editar from './Editar'
import Excluir from './Excluir'


function Tabela(){
//criando uma array vazia para guardar os dados da tabela
const[dados, setDados] = useState([])
//criando uma const para botão de atualizar
const[btnValue, setBtnValue] = useState("Atualizar")

    //primeiro uma função de callback, depois uma array
    useEffect(() => {
        Axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios").then((resposta) =>{
        //utilizando a biblioteca axios, o método get fará uma requisição de dados
                setDados(resposta.data)
            }).catch(
                (error) =>{
                        console.log(error)
                })}, [btnValue])
    return (
        <>
        <button onClick={() => setBtnValue("Atualizado")}>{btnValue}</button>
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
                            <td>
                                <Editar />
                                <Excluir />
                            </td>
                        </tr>
                   ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tabela
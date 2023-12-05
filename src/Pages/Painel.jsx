import Header from "../Components/Header"
import Conteudo from "../Components/Conteudo"
import Tabela from "../Components/Tabela"

function Painel() {
    return(
        <>
        <Header btn={true}/>
        <Conteudo>
            <h2>Lista de funcionários</h2>
            <Tabela />
        </Conteudo>
        </>
    )
}

export default Painel
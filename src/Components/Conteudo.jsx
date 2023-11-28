import { Children } from 'react'
import Header from './Header'

function Conteudo() {
    return(
        <div className={styleContainer}>
            {Children}
        </div>
    )
}

const styleContainer = "mt-5 bg-white p-5 rounded shadow"

export default Conteudo
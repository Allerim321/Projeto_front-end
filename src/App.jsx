import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Painel from './Pages/Painel';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  //ao utilizar getItem, é necessario passar a chave, que nesse caso se chama "key"
  const Autenticar = localStorage.getItem("key") === "token" || false
  console.log(Autenticar)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Login />} />
      {/*dentro das chaves a seguir, está a lógica que protegerá a rota através da função localStorage*/}
      {Autenticar ? <Route path='/painel' element={<Painel />} /> : ""}
    </Routes>
    </BrowserRouter>
  )
}

export default App
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login'
import Painel from './Pages/Painel'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/painel' element={<Painel />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
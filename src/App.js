import './App.css';
import Navbar from "./componentes/Navbar"
import Contacto from "./componentes/Contacto"
import Proyectos from "./componentes/Proyectos"
import Info from "./componentes/Info"
import Inicio from "./componentes/Inicio"
import Error from "./componentes/Error"
import Redes from "./componentes/Redes"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className='comienzo'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/cv" element={<Inicio/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </Router>
        <Redes/>
    </div>
  );
}

export default App;

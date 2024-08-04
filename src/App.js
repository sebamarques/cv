import './App.css';
import Navbar from "./componentes/Navbar"
import Inicio from "./componentes/Inicio"
import Informacion from "./componentes/Informacion"
import Proyectos from "./componentes/Proyectos"
import Contacto from "./componentes/Contacto"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className='comienzo'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/cv" element={<Inicio/>}/>
        <Route path="/info" element={<Informacion/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

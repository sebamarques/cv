import { Link } from "react-router-dom";

function Navbar(){
    const rutas= [{
        url:"/cv",
        nombre:"Inicio"
    },
    {
        url:"info",
        nombre:"Informacion"
    },
    {
        url:"proyectos",
        nombre:"Proyectos"
    },
    {
        url:"contacto",
        nombre:"Contacto"

    }
]
    return(
        <div className="rutas">
            {rutas.map( ruta =>
                <Link to={ruta.url}>{ruta.nombre}</Link>
            )}
        </div>
    )
}

export default Navbar;
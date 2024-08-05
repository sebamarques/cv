import { Link } from "react-router-dom";

function Navbar(){
    const rutas= [{
        id:1,
        url:"/cv",
        nombre:"Inicio"
    },
    {
        id:2,
        url:"info",
        nombre:"Informacion"
    },
    {
        id:3,
        url:"proyectos",
        nombre:"Proyectos"
    },
    {
        id:4,
        url:"contacto",
        nombre:"Contacto"

    }
]
    return(
        <div className="rutas">
            {rutas.map( ruta =>
                <Link key={ruta.id} to={ruta.url}>{ruta.nombre}</Link>
            )}
        </div>
    )
}

export default Navbar;
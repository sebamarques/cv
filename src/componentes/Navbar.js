import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faContactCard, faCode, faPerson } from '@fortawesome/free-solid-svg-icons';
import useSeleccion from "../hooks/useSeleccion";

function Header() {
    let links = [
        { id: 1, icono: <FontAwesomeIcon icon={faHome} />, nombre: " Inicio", url: "/cv" },
        { id: 2, icono: <FontAwesomeIcon icon={faPerson} />, nombre: " Sobre mí", url: "/info" },
        { id: 3, icono: <FontAwesomeIcon icon={faCode} />, nombre: " Proyectos", url: "/proyectos" },
        { id: 4, icono: <FontAwesomeIcon icon={faContactCard} />, nombre: " Contacto", url: "/contacto" }
    ];

    const location = useLocation(); // Hook de React Router para obtener la ubicación actual
    const { seleccion, handleSeleccion } = useSeleccion(location.pathname); // Inicializamos con la ubicación actual

    return (
        <div>
            <div className="links">
                <img alt="Imagen Sebastián Márquez" src="../img/IMG_20210922_103730.jpg" />
                {links.map(link => (
                    <Link
                        key={link.id}
                        to={link.url}
                        className={seleccion === link.url ? 'seleccion' : 'link'}
                        onClick={() => handleSeleccion(link.url)}
                    >
                        {link.icono} {link.nombre}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Header;

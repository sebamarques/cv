import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faContactCard,faCode,faPerson} from '@fortawesome/free-solid-svg-icons'
function Header(){
    let links = [
        {   id:1,
            icono:<FontAwesomeIcon icon={faHome}/>,
            nombre:" Inicio",
            url:"/cv"
        },
        {
            id:2,
            icono:<FontAwesomeIcon icon={faPerson}/>,
            nombre:" Sobre mi",
            url:"/info"
        },
        {
            id:3,
            icono:<FontAwesomeIcon icon={faCode}/>,
            nombre:" Proyectos",
            url:"/proyectos"
        },
        {
            id:4,
            icono:<FontAwesomeIcon icon={faContactCard}/>,
            nombre:" Contacto",
            url:"/contacto"
        }
    ]
    return(
        <div>
            <img alt ="Imagen sebastian marquez"src="../img/IMG_20210922_103730.jpg"/>
            <div className="links">{
                links.map(link =>(
                    <Link key={link.id}to={link.url} className="link">{link.icono}{link.nombre}</Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Header
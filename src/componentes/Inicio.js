import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareInstagram,faLinkedin,faSquareTwitter,faSquareGithub,faSquareUpwork} from '@fortawesome/free-brands-svg-icons'
function Inicio(){
    return(
        <>
        <main className='inicio'>
            <div className="presentacion">
                <img alt="Imagen Sebastian Marquez" src=""></img>
                <p>Soy Sebastián Márquez</p>
            </div>
            <div>
                <h2>Desarollador de Software</h2>
            </div>
            <div className="redes">
                <a href='https://instagram.com/_seba.marquez'><FontAwesomeIcon icon={faSquareInstagram}/></a>
                <a href='https://linkedin.com'><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href='https://twitter.com'><FontAwesomeIcon icon={faSquareTwitter}/></a>
                <a href='https://github.com'><FontAwesomeIcon icon={faSquareGithub}/></a>
                <a href='https://upwork.com'><FontAwesomeIcon icon={faSquareUpwork}/></a>
            </div>
        </main>
        </>
    )

}
export default Inicio;
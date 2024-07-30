import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faSquareGithub,faSquareUpwork} from '@fortawesome/free-brands-svg-icons'
function Redes(){
    return(
        <>
        <div className="redes">
                <a href='https://linkedin.com'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://github.com'><FontAwesomeIcon icon={faSquareGithub}/></a>
                <a href='https://upwork.com'><FontAwesomeIcon icon={faSquareUpwork}/></a>
            </div>
        </>
    )

}
export default Redes;
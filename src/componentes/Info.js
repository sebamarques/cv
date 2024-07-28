import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact,faHtml5,faJs,faRaspberryPi,faCss3} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
function Info(){
    return(
        <>
        <div>
                <p>Tecnologias</p>
                <div>
                   <div>
                        <FontAwesomeIcon icon={faReact}/>
                        <p>React</p>
                   </div>
                    <div>
                        <FontAwesomeIcon icon={faHtml5}/>
                        <p>HTML</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faRaspberryPi}/>
                        <p>Raspberry pi </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faJs}/>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCss3}/>
                        <p>CSS</p>
                    <div>
                        <FontAwesomeIcon icon={faDatabase}/>
                        <p>Mongodb</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact,faHtml5,faJs,faRaspberryPi,faCss3} from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
function Info(){
    return(
        <>
        <div className='info'>
            <div className='acerca-de-mi'>
                <h2>Acerca de mi</h2>
                <p>Me apasiona la tecnologia desde una temprana edad, desde entonces quiero trabajar con algo 
                    relacionado a esto, es por eso que comence a estudiar ingenieria en computacion y soy autodidacta, 
                    me incursione en el desarollo web desde 2023 y desde entonces trato de mejorar cada dia, no dudes en contactarme
                </p>
            </div>
            <div className='tecnologias'>
                    <p>Tecnologias</p>
                    <div className='tecnologia'>
                        <div className='icono'>
                                <FontAwesomeIcon icon={faReact}/>
                                <p>React</p>
                        </div>
                        <div className='icono'>
                            <FontAwesomeIcon icon={faHtml5}/>
                            <p>HTML</p>
                        </div>
                        <div className='icono'>
                            <FontAwesomeIcon icon={faRaspberryPi}/>
                            <p>Raspberry pi </p>
                        </div>
                        <div className='icono'>
                            <FontAwesomeIcon icon={faJs}/>
                            <p>JavaScript</p>
                        </div>
                        <div className='icono'>
                            <FontAwesomeIcon icon={faCss3}/>
                            <p>CSS</p>
                        </div>
                        <div className='icono'>
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
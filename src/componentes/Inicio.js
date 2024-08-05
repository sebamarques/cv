import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import hero from "../img/IMG_20240725_112302.jpg"
function Inicio() {
  const redes = [
    {id:1, url: "https://youtube.com", icono: faYoutube },
    {id:2, url: "https://instagram.com", icono: faInstagram },
    {id:3, url: "https://linkedin.com", icono: faLinkedin },
    {id:4, url: "https://twitter.com", icono: faTwitter },
    {id:5, url: "https://github.com", icono: faGithub },
  ];

    return(
        <div>
            <main className="card">
                <section>
                    <div className="info">
                        <img alt="Imagen de Sebastián Márquez" src={hero}></img>
                        <h1>Sebastián Márquez</h1>
                        <p>Desarollador de software</p>
                    </div>
                    <div className="redes">
                        {redes.map(red=>
                            <ul key={red.id}>
                                <li><a href={red.url}><FontAwesomeIcon icon={red.icono} size="2x"/></a></li>
                            </ul>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Inicio;
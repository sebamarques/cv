import gorro from "../../img/gorro.jpg"
import hoodie from "../../img/hoodie.jpg"
import lapicera from "../../img/Lapiceras.jpeg"
import lapices from "../../img/Lapices.jpg"
function Proyectos(){
    const proyectos=[
    {
        img:gorro,
        titulo:"Ecommerce",
        url:"",
        img_alt:"Imagen del ecommerce",
        desc:"Hola soy una descripcion de una pagina web que cree te ggustaria visitrala??"
    },
    {
        img:hoodie,
        titulo:"Restaurante",
        url:"",
        img_alt:"Imagen de la paginad web del restaurante",
        desc:"Hola soy una descripcion de una pagina web que cree te ggustaria visitrala??"
    },
    {
        img:lapicera,
        titulo:"ReciclaYa!",
        url:"",
        img_alt:"Imagen de sitio web Ecologico",
        desc:"Hola soy una descripcion de una pagina web que cree te ggustaria visitrala??"
    },
    {
        img:lapices,
        titulo:"Reiki",
        url:"",
        img_alt:"Imagen de sitio web reiki",
        desc:"Hola soy una descripcion de una pagina web que cree te ggustaria visitrala??"
    }
]
    return(
    <div>
        <h2 id="mostrar">Proyectos</h2>
        <article className="proyectos">
            {proyectos.map((proyecto)=>(
                <div className="proyecto">
                <img src={proyecto.img} alt={proyecto.img_alt}/>
                <h3>{proyecto.titulo}</h3>
                    <p>{proyecto.desc}</p>
                    <footer>
                        <ul>
                            <li><a href={proyecto.url}>Link de github</a></li>
                            <li><a href={proyecto.url_proyecto}>Link de pagina web proyecto</a></li>
                        </ul>
                    </footer>
                </div>
            ))}
        </article>
    </div>
    )
}
export default Proyectos;
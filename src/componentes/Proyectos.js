import fondo from "../img/fondo.jpg"

function Proyectos(){
    const proyectos =[
        {   id:1,
            url:"https://sebamarques.github.io/reciclaya",
            img:fondo,
            alt:"Imagen de ReciclaYA"
        },
        {   id:2,
            url:"https://sebamarques.github.io/Restaurante",
            img:fondo,
            alt:"Imagen de Restaurante"
        },
        {
            id:3,
            url:"https://sebamarques.github.io/Reiki",
            img:fondo,
            alt:"Imagen de Reiki"
        },
        {
            id:4,
            url:"https://sebamarques.github.io/dentista",
            img:fondo,
            alt:"Imagen de Dentista"
        }
    ]
    return(
        <div className="proyectos">
            {proyectos.map(proyecto =>
                <div key={proyecto.id} className="proyecto">
                     <a href={proyecto.url}><img src={proyecto.img} alt={proyecto.alt}></img></a>
                </div>
            )}
        </div>
    )
}

export default Proyectos;
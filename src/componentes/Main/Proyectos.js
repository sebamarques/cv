function Proyectos(){
    const proyectos=[
    {
        img:"",
        titulo:"Ecommerce",
        url:"",
        texto_alt:"Imagen del ecommerce"
    },
    {
        img:"",
        titulo:"Restaurante",
        url:"",
        texto_alt:""
    },
    {
        img:"",
        titulo:"ReciclaYa!",
        url:"",
        texto_alt:"Imagen de sitio web Ecologico"
    },
    {
        img:"",
        titulo:"Reiki",
        url:"",
        texto_alt:"Imagen de sitio web reiki"
    }
]
    return(
    <div>
        <h2>Proyectos</h2>
        <article>
            <div className="img_proyecto">
                <img></img>
            </div>
            <div>
                <h3>Proyecto y algo mas</h3>
                <div className="proyectos">
                <ul>
                    <li>Logos con que tecnologia hice el proyecto</li>
                </ul>
                    <p>Texto texto texot text texot teoxt rteo</p>
                    <footer>
                        <ul>
                            <a href="https://github.com">Link de github</a>
                        </ul>
                    </footer>
                </div>

            </div>

        </article>
    </div>
    )
}
export default Proyectos;
function Proyectos(){
    let paginas = [
        {   id:1,
            titulo:"Domo-home",
            descripcion:"Pagina web donde muestro mis proyectos de Robotica",
            url:"https://sebamarques.github.io/domohome"
        },
        {
            id:2,
            titulo:"Dentista",
            descripcion:"Pagina web dentista",
            url:"https://sebamarques.github.io/dentista"
        },
        {
            id:3,
            titulo:"Gimnasio",
            descripcion:"Pagina web gimnasio",
            url:"https://sebamarques.github.io/gimnasio"
        },
        {
            id:4,
            titulo:"Ecommerce(Jovenes a Programar)",
            descripcion:"Proyecto realizado mientras cursaba jovenes a programar",
            url:"https://sebamarques.github.io/JAP"
        },
        {
            id:5,
            titulo:"Pagina web Peluqueria",
            descripcion:"Pagina web destinada a una peluqueria",
            url:"https://sebamarques.github.io/peluqueria"
        }
    ]
    return(
        <>
        <main>
            <h1>Mis proyectos</h1>
            <div className="proyectos">
                    {paginas.map(pagina =>(
                        <div className="proyecto" key={pagina.id}>
                            <img alt={pagina.descripcion}></img>
                            <h2>{pagina.titulo}</h2>
                            <a href={pagina.url}>Ir a pagina</a>
                        </div>
                    ))}
            </div>
        </main>
        </>
    )

}
export default Proyectos;
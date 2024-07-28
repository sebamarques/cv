function Proyectos(){
    let paginas = [
        {   id:1,
            titulo:"Domo-home",
            descripcion:"Pagina web donde muestro mis proyectos de Robotica",
            url:"sebamarques.github.io/domohome"
        },
        {
            id:2,
            titulo:"Dentista",
            descripcion:"Pagina web dentista",
            url:"sebamarques.github.io/dentista"
        },
        {
            id:3,
            titulo:"Gimnasio",
            descripcion:"Pagina web gimnasio",
            url:"sebamarques.github.io/gimnasio"
        },
        {
            id:4,
            titulo:"Ecommerce(Jovenes a Programar)",
            descripcion:"Proyecto realizado mientras cursaba jovenes a programar",
            url:"sebamarques.github.io/JAP"
        },
        {
            id:5,
            titulo:"Pagina web Peluqueria",
            descripcion:"Pagina web destinada a una peluqueria",
            url:"sebamarques.github.io/peluqueria"
        }
    ]
    return(
        <>
        <main>
            <div className="proyectos">
                    {paginas.map(pagina =>(
                        <div key={pagina.id}>
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
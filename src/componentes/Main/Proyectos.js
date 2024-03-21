import gorro from "../../img/IMG_20210922_103730.jpg"
function Proyecto(){
    return(
        <div>
            <h2>Proyectos</h2>
            <main>
                <article className="main-content">
                    <img alt="imagen de ReciclaYa!" src={gorro}></img>
                    <h3>ReciclaYa!</h3>
                    <p>descripcion de reciclaYa</p>
                    <a href="https://sebamarques.github.io/ReciclaYa">Ver proyecto</a>
                </article>
                <article className="main-content">
                    <img alt="imagen de reiki" src={gorro}></img>
                    <h3>Reiki</h3>
                    <p>descripcion de Reiki</p>
                    <a href="https://sebamarques.github.io/reiki">Ver proyecto</a>
                </article>
                <article className="main-content">
                    <img alt="imagen de ecommerce" src={gorro}></img>
                    <h3>Ecommerce</h3>
                    <p>descripcion de ecommerce</p>
                    <a href="https://sebamarques.github.io/ecommerce">Ver proyecto</a>
                </article>
                <article className="main-content">
                    <img alt="imagen de Restaurante!" src={gorro}></img>
                    <h3>Restaurante</h3>
                    <p>descripcion de restaurante</p>
                    <a href="https://sebamarques.github.io/restaurante">Ver proyecto</a>
                </article>
            </main>
        </div>
    )
}
export default Proyecto;
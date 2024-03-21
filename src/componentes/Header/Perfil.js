import perfil from "../../img/IMG_20210922_103730.jpg"
function Perfil(){
    return(
        <div>
            <section className="informacion">
                <img src={perfil} alt="imagen de Sebastián Márquez"></img>
                <h1>Sebastián Márquez</h1>
                <h4 className="title-secondary">Desarollador frontend</h4>
                <p>Soy estudiante de la carrera de Ingeniería en Computación y en mis tiempos libres soy freelancer</p>
                <p>No dudes en contactarme!</p>
            </section>
        </div>
    )
}
export default Perfil;
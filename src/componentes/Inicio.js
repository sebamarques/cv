import useProfesion from "../hooks/useProfesion";
function Inicio(){
    const profesion = ["Desarollador Web", "Programador Robotica","Diseñador web"]
    return(
    <>
    <main className='inicio'>
        <div className="presentacion">
            <img alt="Imagen Sebastian Marquez" src=""></img>
            <p>Soy Sebastián Márquez</p>
        </div>
        <div>
            {useProfesion(profesion)}
        </div>
    </main>
    </>
)

}
export default Inicio;
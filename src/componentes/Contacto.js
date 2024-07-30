function Contacto(){
    return(
        <div className="contacto">
            <h1>Contacto</h1>
        <form>
            <input type="text" placeholder="Nombre y apellido*" required/>
            <input type="email" placeholder="Mail*" required/>
            <textarea required placeholder="Escribi tu duda o consulta aqui*"></textarea>
            <button>Enviar</button>
        </form>
        </div>
    )
}

export default Contacto;
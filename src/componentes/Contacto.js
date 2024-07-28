function Contacto(){
    return(
        <div className="contacto">
            <h1>Contacto</h1>
        <form>
            <input type="text" placeholder="Nombre y apellido" required/>
            <input type="mail" placeholder="Mail" required/>
            <textarea required>Ingresa tu consulta</textarea>
            <button>Enviar</button>
        </form>
        </div>
    )
}

export default Contacto;
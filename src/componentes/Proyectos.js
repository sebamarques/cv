import { useState } from "react";

function Proyectos() {
    let paginas = [
        { id: 1, titulo: "Domo-home", descripcion: "Pagina web donde muestro mis proyectos de Robotica", url: "https://sebamarques.github.io/domohome" },
        { id: 2, titulo: "Dentista", descripcion: "Pagina web dentista", url: "https://sebamarques.github.io/dentista" },
        { id: 3, titulo: "Ecommerce(Jovenes a Programar)", descripcion: "Proyecto realizado mientras cursaba jovenes a programar", url: "https://sebamarques.github.io/JAP" },
        { id: 4, titulo: "Pagina web Peluqueria", descripcion: "Pagina web destinada a una peluqueria", url: "https://sebamarques.github.io/peluqueria" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? paginas.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === paginas.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <main>
            <div className="proyectos">
                <button onClick={handlePrevClick}>&lt;</button>
                <div className="proyecto">
                    <h2>{paginas[currentIndex].titulo}</h2>
                    <p>{paginas[currentIndex].descripcion}</p>
                    <a href={paginas[currentIndex].url} target="_blank" rel="noopener noreferrer">Ir a pagina</a>
                </div>
                <button onClick={handleNextClick}>&gt;</button>
            </div>
        </main>
    );
}

export default Proyectos;

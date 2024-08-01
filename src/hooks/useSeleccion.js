import { useState } from "react";

function useSeleccion(initialPath) {
    const [seleccion, setSeleccion] = useState(initialPath);

    const handleSeleccion = (url) => {
        setSeleccion(url);
    };

    return {
        seleccion,
        handleSeleccion
    };
}

export default useSeleccion;

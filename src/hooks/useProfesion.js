import { useState, useEffect } from 'react';

function useProfesion(profesion) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % profesion.length);
    }, 3000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [profesion]);

  return (
    <h2>{profesion[index]}</h2>
  );
}

export default useProfesion;

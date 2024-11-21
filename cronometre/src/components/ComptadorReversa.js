// src/components/ComptadorReversa.js
import React, { useState, useEffect } from 'react';

const ComptadorReversa = () => {
  const [comptador, setComptador] = useState(10);  // Estado inicial en 10
  const [actiu, setActiu] = useState(false);  // Estado de activación del contador

  useEffect(() => {
    let interval;
    if (actiu && comptador > 0) {
      interval = setInterval(() => {
        setComptador((prevComptador) => prevComptador - 1);
      }, 1000);
    } else if (comptador === 0) {
      setActiu(false);  // Detener al llegar a cero
    }

    return () => clearInterval(interval);  // Limpiar el intervalo al desmontar
  }, [actiu, comptador]);

  return (
    <div className="container">
      <h1>Compte enrere: {comptador}</h1>
      {comptador === 0 && <p>Temps acabat!</p>}
      <button onClick={() => setActiu(true)}>Iniciar</button>
      <button onClick={() => setActiu(false)}>Aturar</button>
    </div>
  );
};

export default ComptadorReversa;

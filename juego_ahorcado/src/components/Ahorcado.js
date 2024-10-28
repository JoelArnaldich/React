
import React from 'react';

const Ahorcado = ({ mistakes }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <p style={{ fontSize: '1.5em' }}>Errores: {mistakes}</p>
    </div>
  );
};

export default Ahorcado;

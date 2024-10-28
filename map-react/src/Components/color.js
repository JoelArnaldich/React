import React from 'react';

const color = () => {
  const colors = ['Red', 'Green', 'Blue', 'Yellow'];

  return (
    <ul>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
};


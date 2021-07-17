import React from 'react';

export const MenuComponent: React.FC = () => {
  return (
    <>
      <div className="logo">
        <img src="./src/assets/university.png" alt="Magister" />
        <h1 className="logo">Magister</h1>
      </div>
      <ul>
        <li className="active">¿En qué te quieres especializar?</li>
        <li>Horario y modalidad</li>
        <li>Tarifa</li>
        <li>Datos personales</li>
        <li>Dirección</li>
        <li>Forma de pago</li>
      </ul>
    </>
  );
};

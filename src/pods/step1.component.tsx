import React from 'react';

export const Step1Component: React.FC = () => {
  return (
    <div>
      <h1 className="form-title">¿En qué te quieres especializar?</h1>
      <form>
        <div className="flex-item form-item">
          <label form="branch" className="label-title">
            Rama
          </label>
          <label form="branch">(Selecciona una opción)</label>
          <select name="branch">
            <option disabled selected className="disabled-option">
              Ciencias Ambientales
            </option>
            <option value="Ciencias Ambientales">Ciencias Ambientales</option>
            <option value="">Biotecnología</option>
          </select>
        </div>
        <div className="flex-item form-item">
          <label form="province" className="label-title">
            Provincia
          </label>
          <label form="province">(Selecciona una opción)</label>
          <select name="province">
            <option disabled selected className="disabled-option">
              Madrid
            </option>
            <option value="Madrid">Madrid</option>
            <option value="Salamanca">Salamanca</option>
          </select>
        </div>
        <div className="flex-item form-item fullwidth radio-button">
          <label form="student" className="label-title">
            ¿Has sido alumn@ de Magister?
          </label>
          <label form="student" className="form-conditions">
            Consulta condiciones
          </label>
          <div className="group-options">
            <input type="radio" name="student" id="studentChoice1" value="No" />
            <label htmlFor="studentChoice1" className="button">
              No
            </label>
            <input type="radio" name="student" id="studentChoice2" value="Si" />
            <label htmlFor="studentChoice2" className="button">
              Sí
            </label>
            <input
              type="radio"
              name="student"
              id="studentChoice3"
              value="Si, despues de 2017"
            />
            <label htmlFor="studentChoice3" className="button">
              Sí, después de 2017
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

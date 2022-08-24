import React from "react";

function Filtros(props) {
  return (
    <div className="inputContainer">
      <input type="date"></input>
      <input type="date"></input>
      <select>
        <option>Seleccione un pais</option>
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Brasil">Brasil</option>
        <option value="Uruguay">Uruguay</option>
      </select>
      <select>
        <option>Seleccione un Precio</option>
        <option>$</option>
        <option>$$</option>
        <option>$$$</option>
        <option>$$$$</option>
      </select>
    </div>
  );
}
export default Filtros;

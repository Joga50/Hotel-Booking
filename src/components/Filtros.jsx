import React from "react";

function Filtros(props) {
  const { setPrecio, setPais, setCapacidad } = props;

  return (
    <div className="inputContainer">
      <input type="date"></input>
      <input type="date"></input>
      <select onChange={(e) => setPais(e.target.value)}>
        <option value={""}>Todos los paises</option>
        <option>Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Brasil">Brasil</option>
        <option value="Uruguay">Uruguay</option>
      </select>
      <select onChange={(e) => setPrecio(e.target.value)}>
        <option value={"Todos los precios"}>Todos los precios</option>
        <option value={1}>$</option>
        <option value={2}>$$</option>
        <option value={3}>$$$</option>
        <option value={4}>$$$$</option>
      </select>
      <select onChange={(e) => setCapacidad(e.target.value)}>
        <option value={"Capacidad del hotel"}>Capacidad del hotel</option>
        <option value={"Hotel pequeño"}>Hotel pequeño</option>
        <option value={"Hotel mediano"}>Hotel mediano</option>
        <option value={"Hotel grande"}>Hotel grande</option>
      </select>
    </div>
  );
}
export default Filtros;
